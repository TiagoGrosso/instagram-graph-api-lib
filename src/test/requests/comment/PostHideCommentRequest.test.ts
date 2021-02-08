import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../main/Constants';
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

    const mock = new MockAdapter(axios);
    mock.onPost(`${Constants.API_URL}/${TestConstants.COMMENT_ID}`).reply(200, { success: true });
    it('Parses the response', () => {
        expect.assertions(1);
        return requestDefault.execute().then((response) => {
            expect(response).toEqual(new CommentUpdateResponse({ success: true }));
        });
    });
});
