import fetchMock from 'jest-fetch-mock';
import { PostReplyRequest } from '../../../../main/requests/comment/replies/PostReplyRequest';
import { CreatedObjectIdResponse } from '../../../../main/requests/common/CreatedObjectIdResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetRepliesRequest', () => {
    const request: PostReplyRequest = new PostReplyRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.COMMENT_ID,
        TestConstants.COMMENT_TEXT
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('POST');
        expect(request.config().url).toEqual(`/${TestConstants.COMMENT_ID}/replies`);
        expect(request.config().params.message).toEqual(TestConstants.COMMENT_TEXT);
    });

    fetchMock.mockOnce(
        JSON.stringify({
            id: TestConstants.COMMENT_ID,
        })
    );
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(new CreatedObjectIdResponse({ id: TestConstants.COMMENT_ID }));
    });
});
