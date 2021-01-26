import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { UserField } from '../../../../main/Enums';
import { PageInfoRequest } from '../../../../main/requests/page/pageInfo/PageInfoRequest';
import { PageInfoResponse } from '../../../../main/requests/page/pageInfo/PageInfoResponse';
import { TestConstants } from '../../../TestConstants';

describe('PageInfoRequest', () => {
    let request: PageInfoRequest = new PageInfoRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        UserField.BIOGRAPHY,
        UserField.PROFILE_PICTURE_URL
    );
    let requestAllFields: PageInfoRequest = new PageInfoRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID);

    it('Builds the config', () => {
        let fields: string = `${UserField.BIOGRAPHY},${UserField.PROFILE_PICTURE_URL}`;

        expect(request.config().params.fields).toEqual(fields);
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}`);
        expect(requestAllFields.config().params.fields).toEqual(Object.values(UserField).join(','));
    });

    let mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.PAGE_ID}`).reply(200, TestConstants.PAGE_INFO_DATA);
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new PageInfoResponse(TestConstants.PAGE_INFO_DATA));
        });
    });
});
