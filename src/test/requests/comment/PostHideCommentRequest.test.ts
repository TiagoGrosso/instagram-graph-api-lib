import fetchMock from 'jest-fetch-mock';
import { CommentUpdateResponse } from '../../../main/requests/comment/CommentUpdateResponse';
import { PostHideCommentRequest } from '../../../main/requests/comment/PostHideCommentRequest';
import { TestConstants } from '../../TestConstants';

describe('PostHideCommentRequest', () => {
    const requestDefault: PostHideCommentRequest = new PostHideCommentRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.COMMENT_ID
    );
    const requestExplicit: PostHideCommentRequest = new PostHideCommentRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.COMMENT_ID,
        false
    );

    it('Builds the config', () => {
        expect(requestDefault.config().method).toEqual('POST');
        expect(requestDefault.config().url).toEqual(`/${TestConstants.COMMENT_ID}`);
        expect(requestDefault.config().params.hide).toEqual(true);
        expect(requestExplicit.config().params.hide).toEqual(false);
    });

    fetchMock.mockOnce(JSON.stringify({ success: true }));
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await requestDefault.execute();
        expect(response).toEqual(new CommentUpdateResponse({ success: true }));
    });
});
