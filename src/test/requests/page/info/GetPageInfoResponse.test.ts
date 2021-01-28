import { GetPageInfoResponse } from '../../../../main/requests/page/info/GetPageInfoResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetPageInfoResponse', () => {
    let response: GetPageInfoResponse = new GetPageInfoResponse(TestConstants.PAGE_INFO_DATA);

    it('Gets the data object', () => {
        expect(response.getData()).toEqual(TestConstants.PAGE_INFO_DATA);
    });

    it('Gets the page id', () => {
        expect(response.getId()).toEqual(TestConstants.PAGE_INFO_DATA.id);
    });

    it('Gets the page ig id', () => {
        expect(response.getIgId()).toEqual(TestConstants.PAGE_INFO_DATA.ig_id);
    });

    it('Gets the page biography', () => {
        expect(response.getBiography()).toEqual(TestConstants.PAGE_INFO_DATA.biography);
    });

    it('Gets the page followers count', () => {
        expect(response.getFollowers()).toEqual(TestConstants.PAGE_INFO_DATA.followers_count);
    });

    it('Gets the page follows count', () => {
        expect(response.getFollows()).toEqual(TestConstants.PAGE_INFO_DATA.follows_count);
    });

    it('Gets the page media count', () => {
        expect(response.getMediaCount()).toEqual(TestConstants.PAGE_INFO_DATA.media_count);
    });

    it('Gets the page name', () => {
        expect(response.getName()).toEqual(TestConstants.PAGE_INFO_DATA.name);
    });

    it('Gets the page profile picture URL', () => {
        expect(response.getProfilePictureUrl()).toEqual(TestConstants.PAGE_INFO_DATA.profile_picture_url);
    });

    it('Gets the page username', () => {
        expect(response.getUsername()).toEqual(TestConstants.PAGE_INFO_DATA.username);
    });
});
