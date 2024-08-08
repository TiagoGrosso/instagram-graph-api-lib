import fetchMock from 'jest-fetch-mock';
import { GetLinkedInstagramAccountRequest } from '../../../../main/requests/page/linked_instagram_account/GetLinkedInstagramAccountRequest';
import { GetLinkedInstagramAccountResponse } from '../../../../main/requests/page/linked_instagram_account/GetLinkedInstagramAccountResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetLinkedInstagramAccountRequest', () => {
    const request: GetLinkedInstagramAccountRequest = new GetLinkedInstagramAccountRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}`);
    });

    fetchMock.enableMocks();
    fetchMock.mockOnce(JSON.stringify(TestConstants.LINKED_INSTAGRAM_ACCOUNT));
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(new GetLinkedInstagramAccountResponse(TestConstants.LINKED_INSTAGRAM_ACCOUNT));
    });
});
