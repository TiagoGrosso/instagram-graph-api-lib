import { GetHashtagIdResponse } from '../../../../main/requests/hashtag/search/GetHashtagIdResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetHashtagIdResponse', () => {
    const response = new GetHashtagIdResponse({ data: [{ id: TestConstants.HASHTAG_ID }] });

    it('Gets the id', () => {
        expect(response.getId()).toEqual(TestConstants.HASHTAG_ID);
    });
});
