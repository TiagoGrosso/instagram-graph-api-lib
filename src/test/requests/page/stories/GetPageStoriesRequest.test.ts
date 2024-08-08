import fetchMock from 'jest-fetch-mock';
import { GetPageStoriesRequest } from '../../../../main/requests/page/stories/GetPageStoriesRequest';
import { TestConstants } from '../../../TestConstants';
import { ManyIdsResponse } from '../../../../main/requests/common/ManyIdsResponse';

describe('GetPageStoriesRequest', () => {
    const request: GetPageStoriesRequest = new GetPageStoriesRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID);

    it('Builds the config', () => {
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/stories`);
    });

    fetchMock.enableMocks();
    fetchMock.mockOnce(
        JSON.stringify({
            data: [{ id: TestConstants.MEDIA_ID }],
            paging: TestConstants.PAGING,
        })
    );
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(
            new ManyIdsResponse({ data: [{ id: TestConstants.MEDIA_ID }], paging: TestConstants.PAGING })
        );
    });
});
