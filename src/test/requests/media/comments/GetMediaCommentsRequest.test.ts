import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { CommentField } from '../../../../main/Enums';
import { GetMediaCommentsRequest } from '../../../../main/requests/media/comments/GetMediaCommentsRequest';
import { GetObjectCommentsResponse } from '../../../../main/requests/common/GetObjectCommentsResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetMediaCommentsRequest', () => {
    const request: GetMediaCommentsRequest = new GetMediaCommentsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID,
        CommentField.REPLIES,
        CommentField.USERNAME
    );
    const requestAllFields: GetMediaCommentsRequest = new GetMediaCommentsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.MEDIA_ID}/comments`);
        expect(request.config().params.fields).toEqual([CommentField.REPLIES, CommentField.USERNAME].join(','));
        expect(requestAllFields.config().params.fields).toEqual(Object.values(CommentField).join(','));
    });

    const mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.MEDIA_ID}/comments`).reply(200, {
        data: TestConstants.COMMENTS_DATA,
    });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new GetObjectCommentsResponse({ data: TestConstants.COMMENTS_DATA }));
        });
    });
});
