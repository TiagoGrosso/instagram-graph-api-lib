import { InnerId } from '../../../../main/requests/data/Common';
import { GetMediaCommentsResponse } from '../../../../main/requests/media/comments/GetMediaCommentsResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetMediaCommentsResponse', () => {
    const response: GetMediaCommentsResponse = new GetMediaCommentsResponse({
        data: TestConstants.COMMENTS_DATA,
    });

    it('Gets the comments ids', () => {
        expect(response.getIds()).toEqual([TestConstants.COMMENTS_DATA[0].id, TestConstants.COMMENTS_DATA[1].id]);
    });

    it('Gets the comments texts', () => {
        expect(response.getTexts().sort()).toEqual(
            [TestConstants.COMMENTS_DATA[0].text, TestConstants.COMMENTS_DATA[1].text].sort()
        );
    });

    it('Gets the comments texts map', () => {
        const expected = new Map<string, string | undefined>();
        expected.set(TestConstants.COMMENTS_DATA[0].id, TestConstants.COMMENTS_DATA[0].text);
        expected.set(TestConstants.COMMENTS_DATA[1].id, TestConstants.COMMENTS_DATA[1].text);

        expect(response.getTextsMap()).toEqual(expected);
    });

    it('Gets the comments timestamps', () => {
        expect(response.getTimestamps().sort()).toEqual(
            [TestConstants.COMMENTS_DATA[0].timestamp, TestConstants.COMMENTS_DATA[1].timestamp].sort()
        );
    });

    it('Gets the comments timestamps map', () => {
        const expected = new Map<string, string | undefined>();
        expected.set(TestConstants.COMMENTS_DATA[0].id, TestConstants.COMMENTS_DATA[0].timestamp);
        expected.set(TestConstants.COMMENTS_DATA[1].id, TestConstants.COMMENTS_DATA[1].timestamp);

        expect(response.getTimestampsMap()).toEqual(expected);
    });

    it('Gets the comments hidden array', () => {
        expect(response.getHidden().sort()).toEqual(
            [TestConstants.COMMENTS_DATA[0].hidden, TestConstants.COMMENTS_DATA[1].hidden].sort()
        );
    });

    it('Gets the comments hidden map', () => {
        const expected = new Map<string, boolean | undefined>();
        expected.set(TestConstants.COMMENTS_DATA[0].id, TestConstants.COMMENTS_DATA[0].hidden);
        expected.set(TestConstants.COMMENTS_DATA[1].id, TestConstants.COMMENTS_DATA[1].hidden);
        expect(response.getHiddenMap()).toEqual(expected);
    });

    it('Gets the comments like counts', () => {
        expect(response.getLikeCounts().sort()).toEqual(
            [TestConstants.COMMENTS_DATA[0].hidden, TestConstants.COMMENTS_DATA[1].like_count].sort()
        );
    });

    it('Gets the comments like_count map', () => {
        const expected = new Map<string, number | undefined>();
        expected.set(TestConstants.COMMENTS_DATA[0].id, TestConstants.COMMENTS_DATA[0].like_count);
        expected.set(TestConstants.COMMENTS_DATA[1].id, TestConstants.COMMENTS_DATA[1].like_count);
        expect(response.getLikeCountsMap()).toEqual(expected);
    });

    it('Gets the comments media objects', () => {
        expect(response.getMediaObjects().sort()).toEqual(
            [TestConstants.COMMENTS_DATA[0].hidden, TestConstants.COMMENTS_DATA[1].media].sort()
        );
    });

    it('Gets the comments media objects map', () => {
        const expected = new Map<string, InnerId | undefined>();
        expected.set(TestConstants.COMMENTS_DATA[0].id, TestConstants.COMMENTS_DATA[0].media);
        expected.set(TestConstants.COMMENTS_DATA[1].id, TestConstants.COMMENTS_DATA[1].media);
        expect(response.getMediaObjectsMap()).toEqual(expected);
    });

    it('Gets the comments users', () => {
        expect(response.getUsers().sort()).toEqual(
            [TestConstants.COMMENTS_DATA[0].hidden, TestConstants.COMMENTS_DATA[1].user].sort()
        );
    });

    it('Gets the comments users map', () => {
        const expected = new Map<string, InnerId | undefined>();
        expected.set(TestConstants.COMMENTS_DATA[0].id, TestConstants.COMMENTS_DATA[0].user);
        expected.set(TestConstants.COMMENTS_DATA[1].id, TestConstants.COMMENTS_DATA[1].user);
        expect(response.getUsersMap()).toEqual(expected);
    });

    it('Gets the comments users', () => {
        expect(response.getUsernames().sort()).toEqual(
            [TestConstants.COMMENTS_DATA[0].hidden, TestConstants.COMMENTS_DATA[1].username].sort()
        );
    });

    it('Gets the comments users map', () => {
        const expected = new Map<string, string | undefined>();
        expected.set(TestConstants.COMMENTS_DATA[0].id, TestConstants.COMMENTS_DATA[0].username);
        expected.set(TestConstants.COMMENTS_DATA[1].id, TestConstants.COMMENTS_DATA[1].username);
        expect(response.getUsernamesMap()).toEqual(expected);
    });
});
