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
});
