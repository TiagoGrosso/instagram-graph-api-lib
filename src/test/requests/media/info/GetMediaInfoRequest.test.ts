import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { PrivateMediaField, PublicMediaField } from '../../../../main/Enums';
import { GetMediaInfoRequest } from '../../../../main/requests/media/info/GetMediaInfoRequest';
import { GetMediaInfoResponse } from '../../../../main/requests/media/info/GetMediaInfoResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetMediaInfoRequest', () => {
    const request: GetMediaInfoRequest = new GetMediaInfoRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID,
        PrivateMediaField.IS_COMMENT_ENABLED,
        PublicMediaField.OWNER
    );
    const requestAllFields: GetMediaInfoRequest = new GetMediaInfoRequest(
        TestConstants.ACCESS_TOKEN,
        `/${TestConstants.MEDIA_ID}_2`
    );

    it('Builds the config', () => {
        const fields = `${PrivateMediaField.IS_COMMENT_ENABLED},${PublicMediaField.OWNER}`;

        expect(request.config().params.fields).toEqual(fields);
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.MEDIA_ID}`);
        expect(requestAllFields.config().params.fields).toEqual(
            Object.values(PublicMediaField)
                .filter((field) => field != PublicMediaField.VIDEO_TITLE)
                .join(',')
        );
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
