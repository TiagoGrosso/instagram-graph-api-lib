import { PostMediaCommentResponse } from '../../../../main/requests/media/comments/PostMediaCommentResponse';
import { TestConstants } from '../../../TestConstants';

describe('PostMediaCommentResponse', () => {
    const response: PostMediaCommentResponse = new PostMediaCommentResponse({ id: TestConstants.COMMENT_ID });

    it('Gets the id', () => {
        expect(response.getId()).toEqual(TestConstants.COMMENT_ID);
    });
});
