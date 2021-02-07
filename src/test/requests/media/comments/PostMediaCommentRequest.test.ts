import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { PostMediaCommentRequest } from '../../../../main/requests/media/comments/PostMediaCommentRequest';
import { PostMediaCommentResponse } from '../../../../main/requests/media/comments/PostMediaCommentResponse';
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

    const mock = new MockAdapter(axios);
    mock.onPost(`${Constants.API_URL}/${TestConstants.MEDIA_ID}/comments`).reply(200, {
        id: TestConstants.COMMENT_ID,
    });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new PostMediaCommentResponse({ id: TestConstants.COMMENT_ID }));
        });
    });
});
