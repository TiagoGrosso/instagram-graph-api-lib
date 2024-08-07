import fetchMock from 'jest-fetch-mock';
import { GetInstagramAccountInfoRequest } from '../../../../main/requests/page/instagram_account_info/GetInstagramAccountInfoRequest';
import { GetInstagramAccountInfoResponse } from '../../../../main/requests/page/instagram_account_info/GetInstagramAccountInfoResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetInstagramAccountInfoRequest', () => {
    const request: GetInstagramAccountInfoRequest = new GetInstagramAccountInfoRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.INSTAGRAM_ID
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.INSTAGRAM_ID}`);
    });

    fetchMock.mockOnce(JSON.stringify(TestConstants.INSTAGRAM_ACCOUNT_DATA));
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(new GetInstagramAccountInfoResponse(TestConstants.INSTAGRAM_ACCOUNT_DATA));
    });
});
