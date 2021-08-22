import { GetLinkedInstagramAccountResponse } from '../../../../main/requests/page/linked_instagram_account/GetLinkedInstagramAccountResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetAuthorizedFacebookPagesResponse', () => {
    const response: GetLinkedInstagramAccountResponse = new GetLinkedInstagramAccountResponse(
        TestConstants.LINKED_INSTAGRAM_ACCOUNT
    );
    it('Gets linked instagram ID', () => {
        expect(response.getInstagramPageId()).toEqual(
            TestConstants.LINKED_INSTAGRAM_ACCOUNT.instagram_business_account.id
        );
    });
});
