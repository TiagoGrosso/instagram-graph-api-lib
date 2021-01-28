import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { PageField } from '../../../../main/Enums';
import { GetPageInfoRequest } from '../../../../main/requests/page/info/GetPageInfoRequest';
import { GetPageInfoResponse } from '../../../../main/requests/page/info/GetPageInfoResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetPageInfoRequest', () => {
    let request: GetPageInfoRequest = new GetPageInfoRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        PageField.BIOGRAPHY,
        PageField.PROFILE_PICTURE_URL
    );
    let requestAllFields: GetPageInfoRequest = new GetPageInfoRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID
    );

    it('Builds the config', () => {
        let fields: string = `${PageField.BIOGRAPHY},${PageField.PROFILE_PICTURE_URL}`;

        expect(request.config().params.fields).toEqual(fields);
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}`);
        expect(requestAllFields.config().params.fields).toEqual(Object.values(PageField).join(','));
    });

    let mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.PAGE_ID}`).reply(200, TestConstants.PAGE_INFO_DATA);
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new GetPageInfoResponse(TestConstants.PAGE_INFO_DATA));
        });
    });
});
