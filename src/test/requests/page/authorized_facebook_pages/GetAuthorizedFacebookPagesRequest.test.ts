import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { GetAuthorizedFacebookPagesRequest } from '../../../../main/requests/page/authorized_facebook_pages/GetAuthorizedFacebookPagesRequest';
import { GetAuthorizedFacebookPagesResponse } from '../../../../main/requests/page/authorized_facebook_pages/GetAuthorizedFacebookPagesResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetPageInfoRequest', () => {
    const request: GetAuthorizedFacebookPagesRequest = new GetAuthorizedFacebookPagesRequest(
        TestConstants.ACCESS_TOKEN
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual('/me/accounts');
    });

    const mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/me/accounts`).reply(200, TestConstants.AUTHORIZED_FACEBOOK_PAGES);
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new GetAuthorizedFacebookPagesResponse(TestConstants.AUTHORIZED_FACEBOOK_PAGES));
        });
    });
});
