import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { PublicMediaField } from '../../../../main/Enums';
import { AbstractGetHashtagMediaRequest } from '../../../../main/requests/hashtag/media/AbstractGetHashtagMediaRequest';
import { GetPageMediaResponse } from '../../../../main/requests/page/media/GetPageMediaResponse';
import { TestConstants } from '../../../TestConstants';

describe('AbstractGetHashtagMediaRequest', () => {
    class AbstractGetHashtagMediaRequestImpl extends AbstractGetHashtagMediaRequest {}

    const request: AbstractGetHashtagMediaRequestImpl = new AbstractGetHashtagMediaRequestImpl(
        TestConstants.ACCESS_TOKEN,
        TestConstants.HASHTAG_ID,
        TestConstants.PAGE_ID,
        PublicMediaField.CAPTION,
        PublicMediaField.CHILDREN
    );
    const requestAllFields: AbstractGetHashtagMediaRequestImpl = new AbstractGetHashtagMediaRequestImpl(
        TestConstants.ACCESS_TOKEN,
        TestConstants.HASHTAG_ID,
        TestConstants.PAGE_ID
    );

    it('Builds the config', () => {
        const fields = `${PublicMediaField.CAPTION},${PublicMediaField.CHILDREN}`;

        expect(request.config().params.fields).toEqual(fields);
        expect(request.config().params.user_id).toEqual(TestConstants.PAGE_ID);
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.HASHTAG_ID}`);
        expect(requestAllFields.config().params.fields).toEqual(Object.values(PublicMediaField).join(','));
    });

    const mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.HASHTAG_ID}`).reply(200, {
        data: [TestConstants.HASHTAG_ALBUM_MEDIA_DATA, TestConstants.HASHTAG_IMAGE_MEDIA_DATA],
        paging: TestConstants.PAGING,
    });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(
                new GetPageMediaResponse({
                    data: [TestConstants.HASHTAG_ALBUM_MEDIA_DATA, TestConstants.HASHTAG_IMAGE_MEDIA_DATA],
                    paging: TestConstants.PAGING,
                })
            );
        });
    });
});
