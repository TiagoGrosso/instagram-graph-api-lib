import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../main/Constants';
import { GetHashtagIdRequest } from '../../../main/requests/hashtag/search/GetHashtagIdRequest';
import { GetHashtagIdResponse } from '../../../main/requests/hashtag/search/GetHashtagIdResponse';
import { TestConstants } from '../../TestConstants';

describe('GetHashtagIdRequest', () => {
    let request = new GetHashtagIdRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID, TestConstants.HASHTAG);

    it('Builds the config', () => {
        expect(request.config().params.q).toEqual(TestConstants.HASHTAG);
        expect(request.config().params.user_id).toEqual(TestConstants.PAGE_ID);
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual('/ig_hashtag_search');
    });

    let mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/ig_hashtag_search`).reply(200, [{ id: TestConstants.HASHTAG_ID }]);
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new GetHashtagIdResponse([{ id: TestConstants.HASHTAG_ID }]));
        });
    });
});
