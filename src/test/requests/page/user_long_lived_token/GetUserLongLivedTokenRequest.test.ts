import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { GetUserLongLivedTokenRequest } from '../../../../main/requests/page/user_long_lived_token/GetUserLongLivedTokenRequest';
import { GetUserLongLivedTokenResponse } from '../../../../main/requests/page/user_long_lived_token/GetUserLongLivedTokenResponse';
import { TestConstants } from '../../../TestConstants';

function buildUrl(): string {
    return [
        '/oauth/access_token?',
        'grant_type=fb_exchange_token&',
        `client_id=${TestConstants.FACEBOOK_CLIENT_APP_ID}&`,
        `client_secret=${TestConstants.FACEBOOK_CLIENT_APP_SECRET}&`,
        `fb_exchange_token=${TestConstants.ACCESS_TOKEN}`,
    ].join('');
}
describe('GetUserLongLivedTokenRequest', () => {
    const request: GetUserLongLivedTokenRequest = new GetUserLongLivedTokenRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.FACEBOOK_CLIENT_APP_ID,
        TestConstants.FACEBOOK_CLIENT_APP_SECRET
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(buildUrl());
    });

    const mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}${buildUrl()}`).reply(200, TestConstants.USER_LONG_LIVED_TOKEN_DATA);
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new GetUserLongLivedTokenResponse(TestConstants.USER_LONG_LIVED_TOKEN_DATA));
        });
    });
});
