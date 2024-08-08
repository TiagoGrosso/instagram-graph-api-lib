import fetchMock from 'jest-fetch-mock';
import { PostMediaCommentRequest } from '../../../../main/requests/media/comments/PostMediaCommentRequest';
import { CreatedObjectIdResponse } from '../../../../main/requests/common/CreatedObjectIdResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetMediaCommentsRequest', () => {
    const request: PostMediaCommentRequest = new PostMediaCommentRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID,
        TestConstants.COMMENT_TEXT
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('POST');
        expect(request.config().url).toEqual(`/${TestConstants.MEDIA_ID}/comments`);
    });

    fetchMock.enableMocks();
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
