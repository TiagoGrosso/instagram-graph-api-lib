import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
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

    const mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.INSTAGRAM_ID}`).reply(200, TestConstants.INSTAGRAM_ACCOUNT_DATA);
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new GetInstagramAccountInfoResponse(TestConstants.INSTAGRAM_ACCOUNT_DATA));
        });
    });
});
