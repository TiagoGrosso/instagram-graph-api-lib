import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { GetMediaChildrenRequest } from '../../../../main/requests/media/children/GetMediaChildrenRequest';
import { GetMediaChildrenResponse } from '../../../../main/requests/media/children/GetMediaChildrenResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetMediaCommentsRequest', () => {
    const request: GetMediaChildrenRequest = new GetMediaChildrenRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.MEDIA_ID}/children`);
    });

    const mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.MEDIA_ID}/children`).reply(200, {
        data: TestConstants.CHILDREN_DATA,
    });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new GetMediaChildrenResponse({ data: TestConstants.CHILDREN_DATA }));
        });
    });
});
