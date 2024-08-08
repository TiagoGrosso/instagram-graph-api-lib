import fetchMock from 'jest-fetch-mock';
import { CommentField } from '../../../../main/Enums';
import { GetRepliesRequest } from '../../../../main/requests/comment/replies/GetRepliesRequest';
import { GetObjectCommentsResponse } from '../../../../main/requests/common/GetObjectCommentsResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetRepliesRequest', () => {
    const request: GetRepliesRequest = new GetRepliesRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.COMMENT_ID,
        CommentField.HIDDEN,
        CommentField.USERNAME
    );
    const requestWithReply: GetRepliesRequest = new GetRepliesRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.COMMENT_ID,
        CommentField.REPLIES,
        CommentField.USERNAME
    );
    const requestAllFields: GetRepliesRequest = new GetRepliesRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.COMMENT_ID
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.COMMENT_ID}/replies`);
        expect(request.config().params.fields).toEqual([CommentField.HIDDEN, CommentField.USERNAME].join(','));
        expect(requestWithReply.config().params.fields).toEqual(CommentField.USERNAME);
        expect(requestAllFields.config().params.fields).toEqual(
            Object.values(CommentField)
                .filter((field) => field != CommentField.REPLIES)
                .join(',')
        );
    });

    fetchMock.mockOnce(
        JSON.stringify({
            data: TestConstants.COMMENTS_DATA,
        })
    );
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(new GetObjectCommentsResponse({ data: TestConstants.COMMENTS_DATA }));
    });
});
