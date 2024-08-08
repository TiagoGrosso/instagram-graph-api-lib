import fetchMock from 'jest-fetch-mock';
import { GetHashtagIdRequest } from '../../../../main/requests/hashtag/search/GetHashtagIdRequest';
import { GetHashtagIdResponse } from '../../../../main/requests/hashtag/search/GetHashtagIdResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetHashtagIdRequest', () => {
    const request = new GetHashtagIdRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID, TestConstants.HASHTAG);

    it('Builds the config', () => {
        expect(request.config().params.q).toEqual(TestConstants.HASHTAG);
        expect(request.config().params.user_id).toEqual(TestConstants.PAGE_ID);
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual('/ig_hashtag_search');
    });

    fetchMock.enableMocks();
    fetchMock.mockOnce(JSON.stringify({ data: [{ id: TestConstants.HASHTAG_ID }] }));
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(new GetHashtagIdResponse({ data: [{ id: TestConstants.HASHTAG_ID }] }));
    });
});
