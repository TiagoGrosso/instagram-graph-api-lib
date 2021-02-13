import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { PrivateMediaField, PublicMediaField } from '../../../../main/Enums';
import { GetPageMediaRequest } from '../../../../main/requests/page/media/GetPageMediaRequest';
import { GetPageMediaResponse } from '../../../../main/requests/page/media/GetPageMediaResponse';
import { Utils } from '../../../../main/Utils';
import { TestConstants } from '../../../TestConstants';

describe('GetPageMediaRequest', () => {
    const request: GetPageMediaRequest = new GetPageMediaRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        PublicMediaField.LIKE_COUNT,
        PrivateMediaField.SHORTCODE
    );
    const requestAllFields: GetPageMediaRequest = new GetPageMediaRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID
    );

    it('Builds the config', () => {
        const fields = `${PublicMediaField.LIKE_COUNT},${PrivateMediaField.SHORTCODE}`;

        expect(request.config().params.fields).toEqual(fields);
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/media`);
        expect(requestAllFields.config().params.fields).toEqual(Utils.getAllMediaFields().join(','));
    });

    const mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.PAGE_ID}/media`).reply(200, {
        data: [TestConstants.PARTIAL_MEDIA_DATA],
        paging: TestConstants.PAGING,
    });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(
                new GetPageMediaResponse({ data: [TestConstants.PARTIAL_MEDIA_DATA], paging: TestConstants.PAGING })
            );
        });
    });
});
