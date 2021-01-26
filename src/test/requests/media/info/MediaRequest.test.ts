import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
//import { Constants } from '../../../../main/Constants';
import { MediaField } from '../../../../main/Enums';
import { MediaRequest } from '../../../../main/requests/media/info/MediaRequest';
import { MediaResponse } from '../../../../main/requests/media/info/MediaResponse';
import { TestConstants } from '../../../TestConstants';

describe('MediaRequest', () => {
    let request: MediaRequest = new MediaRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID,
        MediaField.IS_COMMENT_ENABLED,
        MediaField.OWNER
    );
    let requestAllFields: MediaRequest = new MediaRequest(TestConstants.ACCESS_TOKEN, `/${TestConstants.MEDIA_ID}_2`);

    it('Builds the config', () => {
        let fields: string = `${MediaField.IS_COMMENT_ENABLED},${MediaField.OWNER}`;

        expect(request.config().params.fields).toEqual(fields);
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.MEDIA_ID}`);
        expect(requestAllFields.config().params.fields).toEqual(Object.values(MediaField).join(','));
    });

    let mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.MEDIA_ID}`).reply(200, TestConstants.PARTIAL_MEDIA_DATA);
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new MediaResponse(TestConstants.PARTIAL_MEDIA_DATA));
        });
    });
});
