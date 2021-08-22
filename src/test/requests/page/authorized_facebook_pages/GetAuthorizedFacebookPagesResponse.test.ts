import { GetAuthorizedFacebookPagesResponse } from '../../../../main/requests/page/authorized_facebook_pages/GetAuthorizedFacebookPagesResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetAuthorizedFacebookPagesResponse', () => {
    const response: GetAuthorizedFacebookPagesResponse = new GetAuthorizedFacebookPagesResponse(
        TestConstants.AUTHORIZED_FACEBOOK_PAGES
    );
    it('Gets authorized pages', () => {
        expect(response.getAuthorizedFacebookPages()).toEqual(TestConstants.AUTHORIZED_FACEBOOK_PAGES.data);
    });
});
