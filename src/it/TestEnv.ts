import * as dotenv from 'dotenv';
import { Client } from '../main/Client';
import { ApiVersion, MediaTypeInResponses } from '../main/Enums';

dotenv.config();

/**
 * Gets the page id.
 */
export function getPageId(): string {
    return process.env.PAGE_ID ?? '';
}

/**
 * Gets the page access token.
 */
export function getPageAccessToken(): string {
    return process.env.PAGE_ACCESS_TOKEN ?? '';
}

const client = new Client(getPageAccessToken(), getPageId(), ApiVersion.LATEST);

/**
 * Gets the client to create requests.
 */
export function getClient(): Client {
    return client;
}

export type Media = { url: string; caption: string; type: MediaTypeInResponses };
const photos: Media[] = [
    {
        url: 'https://media.istockphoto.com/id/1018078858/photo/gorgeous-ginger-cat-on-isolated-black-background.jpg?s=612x612&w=0&k=20&c=47yGoaN8LMsLCMKhScisycwaGnZdKTNvdTq61mHTLBo=',
        caption: 'Orange cat',
    },
    {
        url: 'https://www.gccfcats.org/wp-content/uploads/2021/09/caring-for-your-cat-2.jpg',
        caption: 'Kitten',
    },
    {
        url: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
        caption: 'Curious cat',
    },
].map((photo) => ({ ...photo, type: MediaTypeInResponses.IMAGE }));

const videos: Media[] = [
    {
        url: 'https://videos.pexels.com/video-files/855029/855029-sd_640_360_30fps.mp4',
        caption: 'Cat bathing',
    },
    {
        url: 'https://videos.pexels.com/video-files/854132/854132-sd_640_360_25fps.mp4',
        caption: 'Golden pupper',
    },
    {
        url: 'https://videos.pexels.com/video-files/857176/857176-sd_640_360_25fps.mp4',
        caption: 'Cows',
    },
].map((photo) => ({ ...photo, type: MediaTypeInResponses.VIDEO }));

function randomInArray<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

export function getRandomPhoto(): Media {
    return randomInArray(photos);
}

export function getRandomVideo(): Media {
    return randomInArray(videos);
}
