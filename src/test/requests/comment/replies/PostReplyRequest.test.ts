import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
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

    const mock = new MockAdapter(axios);
    mock.onPost(`${Constants.API_URL}/${TestConstants.COMMENT_ID}/replies`).reply(200, {
        id: TestConstants.COMMENT_ID,
    });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new CreatedObjectIdResponse({ id: TestConstants.COMMENT_ID }));
        });
    });
});
