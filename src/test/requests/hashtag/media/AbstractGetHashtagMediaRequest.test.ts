import fetchMock from 'jest-fetch-mock';
import { HashtagMediaField } from '../../../../main/Enums';
import { AbstractGetHashtagMediaRequest } from '../../../../main/requests/hashtag/media/AbstractGetHashtagMediaRequest';
import { GetPageMediaResponse } from '../../../../main/requests/page/media/GetPageMediaResponse';
import { TestConstants } from '../../../TestConstants';

describe('AbstractGetHashtagMediaRequest', () => {
    class AbstractGetHashtagMediaRequestImpl extends AbstractGetHashtagMediaRequest {}

    const request: AbstractGetHashtagMediaRequestImpl = new AbstractGetHashtagMediaRequestImpl(
        TestConstants.ACCESS_TOKEN,
        TestConstants.HASHTAG_ID,
        TestConstants.PAGE_ID,
        HashtagMediaField.CAPTION,
        HashtagMediaField.CHILDREN
    );
    const requestAllFields: AbstractGetHashtagMediaRequestImpl = new AbstractGetHashtagMediaRequestImpl(
        TestConstants.ACCESS_TOKEN,
        TestConstants.HASHTAG_ID,
        TestConstants.PAGE_ID
    );

    it('Builds the config', () => {
        const fields = `${HashtagMediaField.CAPTION},${HashtagMediaField.CHILDREN}`;

        expect(request.config().params.fields).toEqual(fields);
        expect(request.config().params.user_id).toEqual(TestConstants.PAGE_ID);
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.HASHTAG_ID}`);
        expect(requestAllFields.config().params.fields).toEqual(Object.values(HashtagMediaField).join(','));
    });

    fetchMock.mockOnce(
        JSON.stringify({
            data: [TestConstants.HASHTAG_ALBUM_MEDIA_DATA, TestConstants.HASHTAG_IMAGE_MEDIA_DATA],
            paging: TestConstants.PAGING,
        })
    );
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(
            new GetPageMediaResponse({
                data: [TestConstants.HASHTAG_ALBUM_MEDIA_DATA, TestConstants.HASHTAG_IMAGE_MEDIA_DATA],
                paging: TestConstants.PAGING,
            })
        );
    });
});
