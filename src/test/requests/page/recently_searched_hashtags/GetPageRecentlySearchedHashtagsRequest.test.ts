import fetchMock from 'jest-fetch-mock';
import { GetPageRecentlySearchedHashtagsRequest } from '../../../../main/requests/page/recently_searched_hashtags/GetPageRecentlySearchedHashtagsRequest';
import { TestConstants } from '../../../TestConstants';
import { ManyIdsResponse } from '../../../../main/requests/common/ManyIdsResponse';

describe('GetPageRecentlySearchedHashtagsRequest', () => {
    const request: GetPageRecentlySearchedHashtagsRequest = new GetPageRecentlySearchedHashtagsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/recently_searched_hashtags`);
    });

    fetchMock.mockOnce(
        JSON.stringify({
            data: [{ id: TestConstants.HASHTAG_ID }],
            paging: TestConstants.PAGING,
        })
    );
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(
            new ManyIdsResponse({ data: [{ id: TestConstants.HASHTAG_ID }], paging: TestConstants.PAGING })
        );
    });
});
