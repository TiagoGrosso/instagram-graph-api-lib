import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { GetMediaCommentsRequest } from '../../../../main/requests/media/comments/GetMediaCommentsRequest';
import { GetMediaCommentsResponse } from '../../../../main/requests/media/comments/GetMediaCommentsResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetMediaCommentsRequest', () => {
    const request: GetMediaCommentsRequest = new GetMediaCommentsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.MEDIA_ID}/comments`);
    });

    const mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.MEDIA_ID}/comments`).reply(200, {
        data: TestConstants.COMMENTS_DATA,
    });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new GetMediaCommentsResponse({ data: TestConstants.COMMENTS_DATA }));
        });
    });
});
