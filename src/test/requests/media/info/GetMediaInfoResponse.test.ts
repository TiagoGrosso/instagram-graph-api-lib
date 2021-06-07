import { GetMediaInfoResponse } from '../../../../main/requests/media/info/GetMediaInfoResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetMediaInfoResponse', () => {
    const fullResponse: GetMediaInfoResponse = new GetMediaInfoResponse(TestConstants.FULL_MEDIA_DATA);
    const partialResponse: GetMediaInfoResponse = new GetMediaInfoResponse(TestConstants.BARE_MEDIA_DATA);

    it('Gets the data', () => {
        expect(fullResponse.getData()).toEqual(TestConstants.FULL_MEDIA_DATA);
    });

    it('Gets the `id`', () => {
        expect(fullResponse.getId()).toEqual(TestConstants.FULL_MEDIA_DATA.id);
    });

    it('Gets the `caption`', () => {
        expect(fullResponse.getCaption()).toEqual(TestConstants.FULL_MEDIA_DATA.caption);
    });

    it('Gets the `comments_count`', () => {
        expect(fullResponse.getCommentsCount()).toEqual(TestConstants.FULL_MEDIA_DATA.comments_count);
    });

    it('Gets the `ig_id`', () => {
        expect(fullResponse.getIgId()).toEqual(TestConstants.FULL_MEDIA_DATA.ig_id);
    });

    it('Gets the `is_comment_enabled`', () => {
        expect(fullResponse.isCommentsEnabled()).toEqual(TestConstants.FULL_MEDIA_DATA.is_comment_enabled);
    });

    it('Gets the `like_count`', () => {
        expect(fullResponse.getLikeCount()).toEqual(TestConstants.FULL_MEDIA_DATA.like_count);
    });

    it('Gets the `media_type`', () => {
        expect(fullResponse.getMediaType()).toEqual(TestConstants.FULL_MEDIA_DATA.media_type);
    });

    it('Gets the `media_url`', () => {
        expect(fullResponse.getMediaUrl()).toEqual(TestConstants.FULL_MEDIA_DATA.media_url);
    });

    it('Gets the `owner`', () => {
        expect(fullResponse.getOwner()).toEqual(TestConstants.FULL_MEDIA_DATA.owner);
    });

    it('Gets the `owner.id`', () => {
        expect(fullResponse.getOwnerId()).toEqual(TestConstants.FULL_MEDIA_DATA.owner?.id);
    });

    it('Does not throw on undefined owner', () => {
        expect(partialResponse.getOwnerId()).toBeUndefined();
    });

    it('Gets the `permalink`', () => {
        expect(fullResponse.getPermalink()).toEqual(TestConstants.FULL_MEDIA_DATA.permalink);
    });

    it('Gets the `shortcode`', () => {
        expect(fullResponse.getShortcode()).toEqual(TestConstants.FULL_MEDIA_DATA.shortcode);
    });

    it('Gets the `timestamp`', () => {
        expect(fullResponse.getTimestamp()).toEqual(new Date(TestConstants.FULL_MEDIA_DATA.timestamp ?? ''));
    });

    it('Does not throw on undefined `timestamp`', () => {
        expect(partialResponse.getTimestamp()).toBeUndefined();
    });

    it('Gets the `username`', () => {
        expect(fullResponse.getUsername()).toEqual(TestConstants.FULL_MEDIA_DATA.username);
    });

    it('Gets the `media_product_type`', () => {
        expect(fullResponse.getMediaProductType()).toEqual(TestConstants.FULL_MEDIA_DATA.media_product_type);
    });

    it('Gets the `video_title`', () => {
        expect(fullResponse.getVideoTitle()).toEqual(TestConstants.FULL_MEDIA_DATA.video_title);
    });
});
