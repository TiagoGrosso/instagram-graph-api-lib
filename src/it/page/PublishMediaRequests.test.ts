import { getClient, getPageId, getRandomPhoto, getRandomVideo, Media } from '../TestEnv';
import retry from 'retry';
import { CONTAINER_STATUS_CODE } from '../../main/requests/data/ContainerData';
import { MediaProductType, MediaTypeInResponses } from '../../main/Enums';
import { MediaData } from '../../main/requests/data/MediaData';
import { AbstractPostPageMediaRequest } from '../../main/requests/page/media/AbstractPostPageMediaRequest';
import { AxiosError } from 'axios';

describe('PublishMedia', () => {
    it('Publishes photo media', async () => {
        const media = getRandomPhoto();
        const postPhotoRequest = getClient().newPostPagePhotoMediaRequest(media.url, media.caption);
        const containerId = await createContainerAndWaitToBeReady(postPhotoRequest);
        await publishAndAssertSimpleMedia(containerId, media);
    });

    it('Publishes video media', async () => {
        const media = getRandomVideo();
        const postVideoRequest = getClient().newPostPageVideoMediaRequest(media.url, media.caption);
        const containerId = await createContainerAndWaitToBeReady(postVideoRequest);
        await publishAndAssertSimpleMedia(containerId, media);
    });

    it('Publishes carousel media', async () => {
        const photoMedia = getRandomPhoto();
        const videoMedia = getRandomVideo();
        const postPhotoRequest = getClient()
            .newPostPagePhotoMediaRequest(photoMedia.url, photoMedia.caption)
            .withIsCarousel(true);
        const postVideoRequest = getClient()
            .newPostPageVideoMediaRequest(videoMedia.url, videoMedia.caption)
            .withIsCarousel(true);

        const photoContainerId = await createContainerAndWaitToBeReady(postPhotoRequest);
        const videoContainerId = await createContainerAndWaitToBeReady(postVideoRequest);

        const carouselCaption = 'Sample caption';
        const postCarouselRequest = getClient().newPostPageCarouselMediaRequest(
            [photoContainerId, videoContainerId],
            carouselCaption
        );
        const containerId = await createContainerAndWaitToBeReady(postCarouselRequest);
        const mediaId = await publishMedia(containerId);

        const getMediaRequest = getClient().newGetMediaInfoRequest(mediaId);
        const response = await getMediaRequest.execute();

        expect(response.getId()).toEqual(mediaId);
        expect(response.getCaption()).toEqual(carouselCaption);
        expect(response.getOwnerId()).toEqual(getPageId());
        expect(response.getMediaType()).toEqual(MediaTypeInResponses.CAROUSEL);
        expect(response.getMediaProductType()).toEqual(MediaProductType.FEED);
    });

    it('Publishes reel media', async () => {
        const media = getRandomVideo();
        const postReelRequest = getClient().newPostPageReelMediaRequest(media.url, media.caption).withShareToFeed(true);

        const containerId = await createContainerAndWaitToBeReady(postReelRequest);

        const mediaId = await publishMedia(containerId);
        const getMediaRequest = getClient().newGetMediaInfoRequest(mediaId);
        const response = await getMediaRequest.execute();

        expect(response.getId()).toEqual(mediaId);
        expect(response.getCaption()).toEqual(media.caption);
        expect(response.getOwnerId()).toEqual(getPageId());
        expect(response.getMediaType()).toEqual(MediaTypeInResponses.VIDEO);
        expect(response.getMediaProductType()).toEqual(MediaProductType.REEL);
    });
});

function waitForContainerToBeReady(containerId: string): Promise<boolean> {
    const getContainerStatusRequest = getClient().newGetContainerRequest(containerId);
    const operation = retry.operation({
        retries: 10,
        factor: 1,
        minTimeout: 2000,
        maxTimeout: 2000,
    });
    return new Promise<boolean>((resolve) => {
        operation.attempt(async () => {
            const response = await getContainerStatusRequest.execute();
            const statusCode = response.getContainerStatusCode();
            if (statusCode === CONTAINER_STATUS_CODE.ERROR) {
                console.error(response.getContainerStatus());
                resolve(false);
                operation.stop();
            }
            if (statusCode === CONTAINER_STATUS_CODE.FINISHED) {
                console.log('Container published successfully');
                resolve(true);
                operation.stop();
            }
            const msg = `Current container status code: ${statusCode}`;
            console.log(msg);
            operation.retry(new Error(msg));
        });
    });
}

async function createContainerAndWaitToBeReady(req: AbstractPostPageMediaRequest): Promise<string> {
    try {
        const containerId = (await req.execute()).getId();
        const containerSuccess = await waitForContainerToBeReady(containerId);
        if (!containerSuccess) {
            fail('There was an error creating the container');
        }
        return containerId;
    } catch (e) {
        const error = e as AxiosError;
        console.error(error.response?.data);
        throw new Error(error.message);
    }
}

async function publishMedia(containerId: string): Promise<string> {
    const publishContainerRequest = getClient().newPostPublishMediaRequest(containerId);
    return (await publishContainerRequest.execute()).getId();
}

function assertMedia(actual: MediaData, compareTo: Media) {
    expect(actual.caption).toEqual(compareTo.caption);
    expect(actual.owner?.id).toEqual(getPageId());
    expect(actual.media_type).toEqual(compareTo.type);
    expect(actual.media_product_type).toEqual(MediaProductType.FEED);
}

async function publishAndAssertSimpleMedia(containerId: string, media: Media) {
    const mediaId = await publishMedia(containerId);
    const getMediaRequest = getClient().newGetMediaInfoRequest(mediaId);
    const response = await getMediaRequest.execute();
    expect(response.getId()).toEqual(mediaId);
    assertMedia(response.getData(), media);
}
