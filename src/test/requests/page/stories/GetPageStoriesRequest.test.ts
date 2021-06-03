import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { GetPageStoriesRequest } from '../../../../main/requests/page/stories/GetPageStoriesRequest';
import { TestConstants } from '../../../TestConstants';
import { ManyIdsResponse } from '../../../../main/requests/common/ManyIdsResponse';

describe('GetPageStoriesRequest', () => {
    const request: GetPageStoriesRequest = new GetPageStoriesRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID);

    it('Builds the config', () => {
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/stories`);
    });

    const mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.PAGE_ID}/stories`).reply(200, {
        data: [{ id: TestConstants.MEDIA_ID }],
        paging: TestConstants.PAGING,
    });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(
                new ManyIdsResponse({ data: [{ id: TestConstants.MEDIA_ID }], paging: TestConstants.PAGING })
            );
        });
    });
});
