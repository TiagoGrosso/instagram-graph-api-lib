import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { MediaField } from '../../../../main/Enums';
import { GetTagsRequest } from '../../../../main/requests/page/tags/GetTagsRequest';
import { GetTagsResponse } from '../../../../main/requests/page/tags/GetTagsResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetTagsRequest', () => {
    const request = new GetTagsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        MediaField.CAPTION,
        MediaField.LIKE_COUNT
    );
    const requestAllFields = new GetTagsRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID);

    it('Builds the config', () => {
        const fields = `${MediaField.CAPTION},${MediaField.LIKE_COUNT}`;

        expect(request.config().params.fields).toEqual(fields);
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/tags`);

        expect(requestAllFields.config().params.fields).toEqual(Object.values(MediaField).join(','));
    });

    const mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.PAGE_ID}/tags`).reply(200, {
        data: [TestConstants.PARTIAL_MEDIA_DATA],
        paging: TestConstants.PAGING,
    });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(
                new GetTagsResponse({ data: [TestConstants.PARTIAL_MEDIA_DATA], paging: TestConstants.PAGING })
            );
        });
    });
});
