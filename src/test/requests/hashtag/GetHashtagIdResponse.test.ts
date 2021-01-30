import { GetHashtagIdResponse } from '../../../main/requests/hashtag/search/GetHashtagIdResponse';
import { TestConstants } from '../../TestConstants';

describe('GetHashtagIdResponse', () => {
    let response = new GetHashtagIdResponse([{ id: TestConstants.HASHTAG_ID }]);

    it('Gets the id', () => {
        expect(response.getId()).toEqual(TestConstants.HASHTAG_ID);
    });
});
