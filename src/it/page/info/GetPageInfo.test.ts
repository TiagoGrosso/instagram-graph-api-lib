import { getClient, getPageId } from '../../TestEnv';
import { PageField } from '../../../main/Enums';

describe('GetPageInfoRequest', () => {
    it('Gets the page info with all fields', () => {
        const request = getClient().newGetPageInfoRequest();
        expect.assertions(9);
        return request
            .execute()
            .then((result) => {
                expect(result.getId()).toEqual(getPageId());
                expect(result.getBiography()).not.toBeUndefined();
                expect(result.getIgId()).not.toBeUndefined();
                expect(result.getFollowers()).not.toBeUndefined();
                expect(result.getFollows()).not.toBeUndefined();
                expect(result.getMediaCount()).not.toBeUndefined();
                expect(result.getName()).not.toBeUndefined();
                expect(result.getProfilePictureUrl()).not.toBeUndefined();
                expect(result.getUsername()).not.toBeUndefined();
            })
            .catch((error) => {
                fail(error);
            });
    });

    it('Gets the page info with only the requested fields', () => {
        const request = getClient().newGetPageInfoRequest(PageField.BIOGRAPHY, PageField.FOLLOWERS_COUNT);
        expect.assertions(9);
        return request
            .execute()
            .then((result) => {
                expect(result.getId()).toEqual(getPageId()); // will always be present
                expect(result.getBiography()).not.toBeUndefined();
                expect(result.getIgId()).toBeUndefined();
                expect(result.getFollowers()).not.toBeUndefined();
                expect(result.getFollows()).toBeUndefined();
                expect(result.getMediaCount()).toBeUndefined();
                expect(result.getName()).toBeUndefined();
                expect(result.getProfilePictureUrl()).toBeUndefined();
                expect(result.getUsername()).toBeUndefined();
            })
            .catch((error) => {
                fail(error);
            });
    });
});
