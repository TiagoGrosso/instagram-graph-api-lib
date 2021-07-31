import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { GetLinkedInstagramAccountRequest } from '../../../../main/requests/page/linked_instagram_account/GetLinkedInstagramAccountRequest';
import { GetLinkedInstagramAccountResponse } from '../../../../main/requests/page/linked_instagram_account/GetLinkedInstagramAccountResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetLinkedInstagramAccountRequest', () => {
    const request: GetLinkedInstagramAccountRequest = new GetLinkedInstagramAccountRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}`);
    });

    const mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.PAGE_ID}`).reply(200, TestConstants.LINKED_INSTAGRAM_ACCOUNT);
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new GetLinkedInstagramAccountResponse(TestConstants.LINKED_INSTAGRAM_ACCOUNT));
        });
    });
});
