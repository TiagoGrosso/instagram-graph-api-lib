import { GetCommentResponse } from '../../../main/requests/comment/GetCommentResponse';
import { TestConstants } from '../../TestConstants';

describe('GetCommentResponse', () => {
    const response: GetCommentResponse = new GetCommentResponse(TestConstants.COMMENTS_DATA[1]);
    const bareResponse: GetCommentResponse = new GetCommentResponse(TestConstants.COMMENTS_DATA[0]);

    it('Gets the id', () => {
        expect(bareResponse.getId()).toEqual(TestConstants.COMMENTS_DATA[0].id);
    });

    it('Is hidden', () => {
        expect(bareResponse.isHidden()).toBeUndefined();
        expect(response.isHidden()).toEqual(TestConstants.COMMENTS_DATA[1].hidden);
    });

    it('Gets the like count', () => {
        expect(bareResponse.getLikeCount()).toBeUndefined();
        expect(response.getLikeCount()).toEqual(TestConstants.COMMENTS_DATA[1].like_count);
    });

    it('Gets the parent media', () => {
        expect(bareResponse.getParentMedia()).toBeUndefined();
        expect(response.getParentMedia()).toEqual(TestConstants.COMMENTS_DATA[1].media);
    });

    it('Gets the parent media id', () => {
        expect(bareResponse.getParentMediaId()).toBeUndefined();
        expect(response.getParentMediaId()).toEqual(TestConstants.COMMENTS_DATA[1].media?.id);
    });

    it('Gets the replies', () => {
        expect(bareResponse.getReplies()).toBeUndefined();
        expect(response.getReplies()).toEqual(TestConstants.COMMENTS_DATA[1].replies?.data);
    });

    it('Gets the text', () => {
        expect(bareResponse.getText()).toBeUndefined();
        expect(response.getText()).toEqual(TestConstants.COMMENTS_DATA[1].text);
    });

    it('Gets the timestamp', () => {
        expect(bareResponse.getTimestamp()).toBeUndefined();
        expect(response.getTimestamp()).toEqual(TestConstants.COMMENTS_DATA[1].timestamp);
    });

    it('Gets the user', () => {
        expect(bareResponse.getUser()).toBeUndefined();
        expect(response.getUser()).toEqual(TestConstants.COMMENTS_DATA[1].user);
    });

    it('Gets the user id', () => {
        expect(bareResponse.getUserId()).toBeUndefined();
        expect(response.getUserId()).toEqual(TestConstants.COMMENTS_DATA[1].user?.id);
    });

    it('Gets the username', () => {
        expect(bareResponse.getUsername()).toBeUndefined();
        expect(response.getUsername()).toEqual(TestConstants.COMMENTS_DATA[1].username);
    });
});
