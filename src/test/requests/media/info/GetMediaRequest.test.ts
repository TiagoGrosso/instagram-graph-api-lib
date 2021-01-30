import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { MediaField } from '../../../../main/Enums';
import { GetMediaInfoRequest } from '../../../../main/requests/media/info/GetMediaInfoRequest';
import { GetMediaInfoResponse } from '../../../../main/requests/media/info/GetMediaInfoResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetMediaRequest', () => {
    const request: GetMediaInfoRequest = new GetMediaInfoRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID,
        MediaField.IS_COMMENT_ENABLED,
        MediaField.OWNER
    );
    const requestAllFields: GetMediaInfoRequest = new GetMediaInfoRequest(
        TestConstants.ACCESS_TOKEN,
        `/${TestConstants.MEDIA_ID}_2`
    );

    it('Builds the config', () => {
        const fields = `${MediaField.IS_COMMENT_ENABLED},${MediaField.OWNER}`;

        expect(request.config().params.fields).toEqual(fields);
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.MEDIA_ID}`);
        expect(requestAllFields.config().params.fields).toEqual(Object.values(MediaField).join(','));
    });

    const mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.MEDIA_ID}`).reply(200, TestConstants.PARTIAL_MEDIA_DATA);
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new GetMediaInfoResponse(TestConstants.PARTIAL_MEDIA_DATA));
        });
    });
});
