import { GetInstagramAccountInfoResponse } from '../../../../main/requests/page/instagram_account_info/GetInstagramAccountInfoResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetInstagramAccountInfoResponse', () => {
    const response: GetInstagramAccountInfoResponse = new GetInstagramAccountInfoResponse(
        TestConstants.INSTAGRAM_ACCOUNT_DATA
    );
    it('Gets linked instagram ID', () => {
        expect(response.getAccountInfo()).toEqual(TestConstants.INSTAGRAM_ACCOUNT_DATA);
    });
});
