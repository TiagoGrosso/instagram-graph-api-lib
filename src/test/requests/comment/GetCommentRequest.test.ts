import fetchMock from 'jest-fetch-mock';
import { CommentField } from '../../../main/Enums';
import { GetCommentRequest } from '../../../main/requests/comment/GetCommentRequest';
import { GetCommentResponse } from '../../../main/requests/comment/GetCommentResponse';
import { TestConstants } from '../../TestConstants';

describe('GetCommentRequest', () => {
    const request: GetCommentRequest = new GetCommentRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.COMMENT_ID,
        CommentField.REPLIES,
        CommentField.USERNAME
    );
    const requestAllFields: GetCommentRequest = new GetCommentRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.COMMENT_ID
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.COMMENT_ID}`);
        expect(request.config().params.fields).toEqual([CommentField.REPLIES, CommentField.USERNAME].join(','));
        expect(requestAllFields.config().params.fields).toEqual(Object.values(CommentField).join(','));
    });

    fetchMock.mockOnce(JSON.stringify(TestConstants.COMMENTS_DATA[1]));
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(new GetCommentResponse(TestConstants.COMMENTS_DATA[1]));
    });
});
