import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { MediaField } from '../../../../main/Enums';
import { PageMediaRequest } from '../../../../main/requests/page/media/PageMediaRequest';
import { PageMediaResponse } from '../../../../main/requests/page/media/PageMediaResponse';
import { TestConstants } from '../../../TestConstants';

describe('PageInfoRequest', () => {
    let request: PageMediaRequest = new PageMediaRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        MediaField.LIKE_COUNT,
        MediaField.MEDIA_TYPE
    );
    let requestAllFields: PageMediaRequest = new PageMediaRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID);

    it('Builds the config', () => {
        let fields: string = `${MediaField.LIKE_COUNT},${MediaField.MEDIA_TYPE}`;

        expect(request.config().params.fields).toEqual(fields);
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/media`);
        expect(requestAllFields.config().params.fields).toEqual(Object.values(MediaField).join(','));
    });

    let mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.PAGE_ID}/media`).reply(200, {
        data: [TestConstants.PARTIAL_MEDIA_DATA],
        paging: TestConstants.PAGING,
    });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(
                new PageMediaResponse({ data: [TestConstants.PARTIAL_MEDIA_DATA], paging: TestConstants.PAGING })
            );
        });
    });
});
