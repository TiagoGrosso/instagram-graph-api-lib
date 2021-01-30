import { TestConstants } from '../../../TestConstants';
import { GetPageMediaResponse } from '../../../../main/requests/page/media/GetPageMediaResponse';
import { Paging } from '../../../../main/requests/data/Paging';

describe('GetPageMediaResponse', () => {
    const response: GetPageMediaResponse = new GetPageMediaResponse({
        data: [TestConstants.FULL_MEDIA_DATA, TestConstants.BARE_MEDIA_DATA],
        paging: TestConstants.PAGING,
    });

    it('Gets the data object', () => {
        expect(response.getData()).toEqual([TestConstants.FULL_MEDIA_DATA, TestConstants.BARE_MEDIA_DATA]);
    });

    it('Gets the media objects ids', () => {
        expect(response.getIds()).toEqual([TestConstants.FULL_MEDIA_DATA.id, TestConstants.BARE_MEDIA_DATA.id]);
    });

    it('Gets the media objects captions', () => {
        expect(response.getCaptions().sort()).toEqual(
            [TestConstants.FULL_MEDIA_DATA.caption, TestConstants.BARE_MEDIA_DATA.caption].sort()
        );
    });

    it('Gets the media objects captions map', () => {
        const expected = new Map<string, string | undefined>();
        expected.set(TestConstants.FULL_MEDIA_DATA.id, TestConstants.FULL_MEDIA_DATA.caption);
        expected.set(TestConstants.BARE_MEDIA_DATA.id, TestConstants.BARE_MEDIA_DATA.caption);

        expect(response.getCaptionsMap()).toEqual(expected);
    });

    it('Gets the media objects comments count', () => {
        expect(response.getCommentsCount()).toEqual([
            TestConstants.FULL_MEDIA_DATA.comments_count,
            TestConstants.BARE_MEDIA_DATA.comments_count,
        ]);
    });

    it('Gets the media objects comments count map', () => {
        const expected = new Map<string, number | undefined>();
        expected.set(TestConstants.FULL_MEDIA_DATA.id, TestConstants.FULL_MEDIA_DATA.comments_count);
        expected.set(TestConstants.BARE_MEDIA_DATA.id, TestConstants.BARE_MEDIA_DATA.comments_count);

        expect(response.getCommentsCountMap()).toEqual(expected);
    });

    it('Gets the media objects ig ids', () => {
        expect(response.getIgIds()).toEqual([TestConstants.FULL_MEDIA_DATA.ig_id, TestConstants.BARE_MEDIA_DATA.ig_id]);
    });

    it('Gets the media objects ig ids map', () => {
        const expected = new Map<string, string | undefined>();
        expected.set(TestConstants.FULL_MEDIA_DATA.id, TestConstants.FULL_MEDIA_DATA.ig_id);
        expected.set(TestConstants.BARE_MEDIA_DATA.id, TestConstants.BARE_MEDIA_DATA.ig_id);

        expect(response.getIgIdsMap()).toEqual(expected);
    });

    it('Gets the media objects `is_comments_enabled`', () => {
        expect(response.getCommentsEnabled()).toEqual([
            TestConstants.FULL_MEDIA_DATA.is_comment_enabled,
            TestConstants.BARE_MEDIA_DATA.is_comment_enabled,
        ]);
    });

    it('Gets the media objects `is_comments_enabled` map', () => {
        const expected = new Map<string, boolean | undefined>();
        expected.set(TestConstants.FULL_MEDIA_DATA.id, TestConstants.FULL_MEDIA_DATA.is_comment_enabled);
        expected.set(TestConstants.BARE_MEDIA_DATA.id, TestConstants.BARE_MEDIA_DATA.is_comment_enabled);

        expect(response.getCommentsEnabledMap()).toEqual(expected);
    });

    it('Gets the media objects likes', () => {
        expect(response.getLikes()).toEqual([
            TestConstants.FULL_MEDIA_DATA.like_count,
            TestConstants.BARE_MEDIA_DATA.like_count,
        ]);
    });

    it('Gets the media objects likes map', () => {
        const expected = new Map<string, number | undefined>();
        expected.set(TestConstants.FULL_MEDIA_DATA.id, TestConstants.FULL_MEDIA_DATA.like_count);
        expected.set(TestConstants.BARE_MEDIA_DATA.id, TestConstants.BARE_MEDIA_DATA.like_count);

        expect(response.getLikesMap()).toEqual(expected);
    });

    it('Gets the media objects types', () => {
        expect(response.getMediaTypes()).toEqual([
            TestConstants.FULL_MEDIA_DATA.media_type,
            TestConstants.BARE_MEDIA_DATA.media_type,
        ]);
    });

    it('Gets the media objects types map', () => {
        const expected = new Map<string, string | undefined>();
        expected.set(TestConstants.FULL_MEDIA_DATA.id, TestConstants.FULL_MEDIA_DATA.media_type);
        expected.set(TestConstants.BARE_MEDIA_DATA.id, TestConstants.BARE_MEDIA_DATA.media_type);

        expect(response.getMediaTypesMap()).toEqual(expected);
    });

    it('Gets the media objects URLs', () => {
        expect(response.getMediaUrls()).toEqual([
            TestConstants.FULL_MEDIA_DATA.media_url,
            TestConstants.BARE_MEDIA_DATA.media_url,
        ]);
    });

    it('Gets the media objects URLs map', () => {
        const expected = new Map<string, string | undefined>();
        expected.set(TestConstants.FULL_MEDIA_DATA.id, TestConstants.FULL_MEDIA_DATA.media_url);
        expected.set(TestConstants.BARE_MEDIA_DATA.id, TestConstants.BARE_MEDIA_DATA.media_url);

        expect(response.getMediaUrlsMap()).toEqual(expected);
    });

    it('Gets the media objects owners', () => {
        expect(response.getMediaOwners()).toEqual([
            TestConstants.FULL_MEDIA_DATA.owner,
            TestConstants.BARE_MEDIA_DATA.owner,
        ]);
    });

    it('Gets the media objects owners map', () => {
        const expected = new Map<string, { id: string } | undefined>();
        expected.set(TestConstants.FULL_MEDIA_DATA.id, TestConstants.FULL_MEDIA_DATA.owner);
        expected.set(TestConstants.BARE_MEDIA_DATA.id, TestConstants.BARE_MEDIA_DATA.owner);

        expect(response.getMediaOwnersMap()).toEqual(expected);
    });

    it('Gets the media objects owner ids', () => {
        expect(response.getMediaOwnerIds()).toEqual([
            TestConstants.FULL_MEDIA_DATA.owner?.id,
            TestConstants.BARE_MEDIA_DATA.owner?.id,
        ]);
    });

    it('Gets the media objects owner ids map', () => {
        const expected = new Map<string, string | undefined>();
        expected.set(TestConstants.FULL_MEDIA_DATA.id, TestConstants.FULL_MEDIA_DATA.owner?.id);
        expected.set(TestConstants.BARE_MEDIA_DATA.id, TestConstants.BARE_MEDIA_DATA.owner?.id);

        expect(response.getMediaOwnerIdsMap()).toEqual(expected);
    });

    it('Gets the media objects permalinks', () => {
        expect(response.getPermalinks()).toEqual([
            TestConstants.FULL_MEDIA_DATA.permalink,
            TestConstants.BARE_MEDIA_DATA.permalink,
        ]);
    });

    it('Gets the media objects permalinks map', () => {
        const expected = new Map<string, string | undefined>();
        expected.set(TestConstants.FULL_MEDIA_DATA.id, TestConstants.FULL_MEDIA_DATA.permalink);
        expected.set(TestConstants.BARE_MEDIA_DATA.id, TestConstants.BARE_MEDIA_DATA.permalink);

        expect(response.getPermalinksMap()).toEqual(expected);
    });

    it('Gets the media objects shortcodes', () => {
        expect(response.getShortcodes()).toEqual([
            TestConstants.FULL_MEDIA_DATA.shortcode,
            TestConstants.BARE_MEDIA_DATA.shortcode,
        ]);
    });

    it('Gets the media objects shortcodes map', () => {
        const expected = new Map<string, string | undefined>();
        expected.set(TestConstants.FULL_MEDIA_DATA.id, TestConstants.FULL_MEDIA_DATA.shortcode);
        expected.set(TestConstants.BARE_MEDIA_DATA.id, TestConstants.BARE_MEDIA_DATA.shortcode);

        expect(response.getShortcodesMap()).toEqual(expected);
    });

    it('Gets the media objects timestamps', () => {
        expect(response.getTimestamps()).toEqual([new Date(TestConstants.FULL_MEDIA_DATA.timestamp ?? ''), undefined]);
    });

    it('Gets the media objects timestamps map', () => {
        const expected = new Map<string, Date | undefined>();
        expected.set(TestConstants.FULL_MEDIA_DATA.id, new Date(TestConstants.FULL_MEDIA_DATA.timestamp ?? ''));
        expected.set(TestConstants.BARE_MEDIA_DATA.id, undefined);

        expect(response.getTimestampsMap()).toEqual(expected);
    });

    it('Gets the media objects usernames', () => {
        expect(response.getUsernames()).toEqual([
            TestConstants.FULL_MEDIA_DATA.username,
            TestConstants.BARE_MEDIA_DATA.username,
        ]);
    });

    it('Gets the media objects usernames map', () => {
        const expected = new Map<string, string | undefined>();
        expected.set(TestConstants.FULL_MEDIA_DATA.id, TestConstants.FULL_MEDIA_DATA.username);
        expected.set(TestConstants.BARE_MEDIA_DATA.id, TestConstants.BARE_MEDIA_DATA.username);

        expect(response.getUsernamesMap()).toEqual(expected);
    });

    it('Gets the paging', () => {
        expect(response.getPaging()).toEqual(new Paging(TestConstants.PAGING));
    });
});
