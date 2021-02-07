import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../main/Constants';
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

    const mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.COMMENT_ID}`).reply(200, TestConstants.COMMENTS_DATA[1]);
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new GetCommentResponse(TestConstants.COMMENTS_DATA[1]));
        });
    });
});
