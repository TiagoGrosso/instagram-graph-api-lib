import { GetMeResponse } from '../../../../main/requests/page/me/GetMeResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetMeResponse', () => {
    const response: GetMeResponse = new GetMeResponse(TestConstants.ME_DATA);
    const noIgIdResponse: GetMeResponse = new GetMeResponse({ id: 'test' });
    it('Gets the page id', () => {
        expect(response.getPageId()).toEqual(TestConstants.ME_DATA.id);
    });

    it('Gets the instagram page id', () => {
        expect(response.getIgPageId()).toEqual(TestConstants.ME_DATA.instagram_business_account?.id);
        expect(noIgIdResponse.getIgPageId()).toBeUndefined();
    });
});
