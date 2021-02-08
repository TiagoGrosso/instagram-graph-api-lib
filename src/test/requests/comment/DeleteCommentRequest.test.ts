import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../main/Constants';
import { CommentUpdateResponse } from '../../../main/requests/comment/CommentUpdateResponse';
import { DeleteCommentRequest } from '../../../main/requests/comment/DeleteCommentRequest';
import { TestConstants } from '../../TestConstants';

describe('DeleteCommentRequest', () => {
    const request: DeleteCommentRequest = new DeleteCommentRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.COMMENT_ID
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('DELETE');
        expect(request.config().url).toEqual(`/${TestConstants.COMMENT_ID}`);
    });

    const mock = new MockAdapter(axios);
    mock.onDelete(`${Constants.API_URL}/${TestConstants.COMMENT_ID}`).reply(200, { success: true });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new CommentUpdateResponse({ success: true }));
        });
    });
});
