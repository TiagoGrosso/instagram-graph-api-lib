import { GetUserLongLivedTokenResponse } from '../../../../main/requests/page/user_long_lived_token/GetUserLongLivedTokenResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetUserLongLivedTokenResponse', () => {
    const response: GetUserLongLivedTokenResponse = new GetUserLongLivedTokenResponse(
        TestConstants.USER_LONG_LIVED_TOKEN_DATA
    );
    it('Gets linked instagram ID', () => {
        expect(response.getLongLivedToken()).toEqual(TestConstants.USER_LONG_LIVED_TOKEN_DATA.access_token);
    });
});
