import fetchMock from 'jest-fetch-mock';
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

    fetchMock.enableMocks();
    fetchMock.mockOnce(JSON.stringify({ success: true }));
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(new CommentUpdateResponse({ success: true }));
    });
});
