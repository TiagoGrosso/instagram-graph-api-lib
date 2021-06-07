import { MediaProductType } from '../../../../main/Enums';
import { Children } from '../../../../main/requests/data/Common';
import { Paging } from '../../../../main/requests/data/Paging';
import { GetHashtagMediaResponse } from '../../../../main/requests/hashtag/media/GetHashtagMediaResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetHashtagMediaResponse', () => {
    const response: GetHashtagMediaResponse = new GetHashtagMediaResponse({
        data: [TestConstants.HASHTAG_IMAGE_MEDIA_DATA, TestConstants.HASHTAG_ALBUM_MEDIA_DATA],
        paging: TestConstants.PAGING,
    });

    it('Gets the media objects ids', () => {
        expect(response.getIds()).toEqual([
            TestConstants.HASHTAG_IMAGE_MEDIA_DATA.id,
            TestConstants.HASHTAG_ALBUM_MEDIA_DATA.id,
        ]);
    });

    it('Gets the paging', () => {
        expect(response.getPaging()).toEqual(new Paging(TestConstants.PAGING));
    });

    it('Gets the media objects captions', () => {
        expect(response.getCaptions().sort()).toEqual(
            [TestConstants.HASHTAG_IMAGE_MEDIA_DATA.caption, TestConstants.HASHTAG_ALBUM_MEDIA_DATA.caption].sort()
        );
    });

    it('Gets the media objects captions map', () => {
        const expected = new Map<string, string | undefined>();
        expected.set(TestConstants.HASHTAG_IMAGE_MEDIA_DATA.id, TestConstants.HASHTAG_IMAGE_MEDIA_DATA.caption);
        expected.set(TestConstants.HASHTAG_ALBUM_MEDIA_DATA.id, TestConstants.HASHTAG_ALBUM_MEDIA_DATA.caption);

        expect(response.getCaptionsMap()).toEqual(expected);
    });

    it('Gets the media objects children', () => {
        expect(response.getChildren().sort()).toEqual(
            [TestConstants.HASHTAG_IMAGE_MEDIA_DATA.children, TestConstants.HASHTAG_ALBUM_MEDIA_DATA.children].sort()
        );
    });

    it('Gets the media objects children map', () => {
        const expected = new Map<string, Children | undefined>();
        expected.set(TestConstants.HASHTAG_IMAGE_MEDIA_DATA.id, TestConstants.HASHTAG_IMAGE_MEDIA_DATA.children);
        expected.set(TestConstants.HASHTAG_ALBUM_MEDIA_DATA.id, TestConstants.HASHTAG_ALBUM_MEDIA_DATA.children);

        expect(response.getChildrenMap()).toEqual(expected);
    });

    it('Gets the media objects comments count', () => {
        expect(response.getCommentsCount()).toEqual([
            TestConstants.HASHTAG_IMAGE_MEDIA_DATA.comments_count,
            TestConstants.HASHTAG_ALBUM_MEDIA_DATA.comments_count,
        ]);
    });

    it('Gets the media objects comments count map', () => {
        const expected = new Map<string, number | undefined>();
        expected.set(TestConstants.HASHTAG_IMAGE_MEDIA_DATA.id, TestConstants.HASHTAG_IMAGE_MEDIA_DATA.comments_count);
        expected.set(TestConstants.HASHTAG_ALBUM_MEDIA_DATA.id, TestConstants.HASHTAG_ALBUM_MEDIA_DATA.comments_count);

        expect(response.getCommentsCountMap()).toEqual(expected);
    });

    it('Gets the media objects likes', () => {
        expect(response.getLikes()).toEqual([
            TestConstants.HASHTAG_IMAGE_MEDIA_DATA.like_count,
            TestConstants.HASHTAG_ALBUM_MEDIA_DATA.like_count,
        ]);
    });

    it('Gets the media objects likes map', () => {
        const expected = new Map<string, number | undefined>();
        expected.set(TestConstants.HASHTAG_IMAGE_MEDIA_DATA.id, TestConstants.HASHTAG_IMAGE_MEDIA_DATA.like_count);
        expected.set(TestConstants.HASHTAG_ALBUM_MEDIA_DATA.id, TestConstants.HASHTAG_ALBUM_MEDIA_DATA.like_count);

        expect(response.getLikesMap()).toEqual(expected);
    });

    it('Gets the media objects types', () => {
        expect(response.getMediaTypes()).toEqual([
            TestConstants.HASHTAG_IMAGE_MEDIA_DATA.media_type,
            TestConstants.HASHTAG_ALBUM_MEDIA_DATA.media_type,
        ]);
    });

    it('Gets the media objects types map', () => {
        const expected = new Map<string, string | undefined>();
        expected.set(TestConstants.HASHTAG_IMAGE_MEDIA_DATA.id, TestConstants.HASHTAG_IMAGE_MEDIA_DATA.media_type);
        expected.set(TestConstants.HASHTAG_ALBUM_MEDIA_DATA.id, TestConstants.HASHTAG_ALBUM_MEDIA_DATA.media_type);

        expect(response.getMediaTypesMap()).toEqual(expected);
    });

    it('Gets the media objects URLs', () => {
        expect(response.getMediaUrls()).toEqual([
            TestConstants.HASHTAG_IMAGE_MEDIA_DATA.media_url,
            TestConstants.HASHTAG_ALBUM_MEDIA_DATA.media_url,
        ]);
    });

    it('Gets the media objects URLs map', () => {
        const expected = new Map<string, string | undefined>();
        expected.set(TestConstants.HASHTAG_IMAGE_MEDIA_DATA.id, TestConstants.HASHTAG_IMAGE_MEDIA_DATA.media_url);
        expected.set(TestConstants.HASHTAG_ALBUM_MEDIA_DATA.id, TestConstants.HASHTAG_ALBUM_MEDIA_DATA.media_url);

        expect(response.getMediaUrlsMap()).toEqual(expected);
    });

    it('Gets the media objects permalinks', () => {
        expect(response.getPermalinks()).toEqual([
            TestConstants.HASHTAG_IMAGE_MEDIA_DATA.permalink,
            TestConstants.HASHTAG_ALBUM_MEDIA_DATA.permalink,
        ]);
    });

    it('Gets the media objects permalinks map', () => {
        const expected = new Map<string, string | undefined>();
        expected.set(TestConstants.HASHTAG_IMAGE_MEDIA_DATA.id, TestConstants.HASHTAG_IMAGE_MEDIA_DATA.permalink);
        expected.set(TestConstants.HASHTAG_ALBUM_MEDIA_DATA.id, TestConstants.HASHTAG_ALBUM_MEDIA_DATA.permalink);

        expect(response.getPermalinksMap()).toEqual(expected);
    });

    it('Gets the media objects timestamps', () => {
        expect(response.getTimestamps()).toEqual([
            new Date(TestConstants.HASHTAG_IMAGE_MEDIA_DATA.timestamp ?? ''),
            undefined,
        ]);
    });

    it('Gets the media objects timestamps map', () => {
        const expected = new Map<string, Date | undefined>();
        expected.set(
            TestConstants.HASHTAG_IMAGE_MEDIA_DATA.id,
            new Date(TestConstants.HASHTAG_IMAGE_MEDIA_DATA.timestamp ?? '')
        );
        expected.set(TestConstants.HASHTAG_ALBUM_MEDIA_DATA.id, undefined);

        expect(response.getTimestampsMap()).toEqual(expected);
    });

    it('Gets the media objects media product types', () => {
        expect(response.getMediaProductTypes()).toEqual([
            TestConstants.HASHTAG_IMAGE_MEDIA_DATA.media_product_type,
            TestConstants.HASHTAG_ALBUM_MEDIA_DATA.media_product_type,
        ]);
    });

    it('Gets the media objects media product types map', () => {
        const expected = new Map<string, MediaProductType | undefined>();
        expected.set(
            TestConstants.HASHTAG_IMAGE_MEDIA_DATA.id,
            TestConstants.HASHTAG_IMAGE_MEDIA_DATA.media_product_type
        );
        expected.set(
            TestConstants.HASHTAG_ALBUM_MEDIA_DATA.id,
            TestConstants.HASHTAG_ALBUM_MEDIA_DATA.media_product_type
        );

        expect(response.getMediaProductTypesMap()).toEqual(expected);
    });

    it('Gets the media objects permalinks', () => {
        expect(response.getVideoTitles()).toEqual([
            TestConstants.HASHTAG_IMAGE_MEDIA_DATA.video_title,
            TestConstants.HASHTAG_ALBUM_MEDIA_DATA.video_title,
        ]);
    });

    it('Gets the media objects permalinks map', () => {
        const expected = new Map<string, string | undefined>();
        expected.set(TestConstants.HASHTAG_IMAGE_MEDIA_DATA.id, TestConstants.HASHTAG_IMAGE_MEDIA_DATA.video_title);
        expected.set(TestConstants.HASHTAG_ALBUM_MEDIA_DATA.id, TestConstants.HASHTAG_ALBUM_MEDIA_DATA.video_title);

        expect(response.getVideoTitlesMap()).toEqual(expected);
    });
});
