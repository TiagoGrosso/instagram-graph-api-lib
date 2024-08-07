import fetchMock from 'jest-fetch-mock';
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

    fetchMock.mockOnce(JSON.stringify(TestConstants.AUTHORIZED_FACEBOOK_PAGES));
    it('Parses the response', async () => {
        const response = await request.execute();
        expect(response).toEqual(new GetAuthorizedFacebookPagesResponse(TestConstants.AUTHORIZED_FACEBOOK_PAGES));
    });
});
