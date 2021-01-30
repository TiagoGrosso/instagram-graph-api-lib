import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { GetMeRequest } from '../../../../main/requests/page/me/GetMeRequest';
import { GetMeResponse } from '../../../../main/requests/page/me/GetMeResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetPageInfoRequest', () => {
    const request: GetMeRequest = new GetMeRequest(TestConstants.ACCESS_TOKEN);

    it('Builds the config', () => {
        expect(request.config().params.fields).toEqual('instagram_business_account');
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual('/me');
    });

    const mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/me`).reply(200, TestConstants.ME_DATA);
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new GetMeResponse(TestConstants.ME_DATA));
        });
    });
});
