import fetchMock from 'jest-fetch-mock';
import { PublicMediaField } from '../../../../main/Enums';
import { GetTagsRequest } from '../../../../main/requests/page/tags/GetTagsRequest';
import { GetTagsResponse } from '../../../../main/requests/page/tags/GetTagsResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetTagsRequest', () => {
    const request = new GetTagsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        PublicMediaField.CAPTION,
        PublicMediaField.LIKE_COUNT
    );
    const requestAllFields = new GetTagsRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID);

    it('Builds the config', () => {
        const fields = `${PublicMediaField.CAPTION},${PublicMediaField.LIKE_COUNT}`;

        expect(request.config().params.fields).toEqual(fields);
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/tags`);

        expect(requestAllFields.config().params.fields).toEqual(
            Object.values(PublicMediaField)
                .filter((field) => field != PublicMediaField.VIDEO_TITLE)
                .join(',')
        );
    });

    fetchMock.mockOnce(
        JSON.stringify({
            data: [TestConstants.PARTIAL_MEDIA_DATA],
            paging: TestConstants.PAGING,
        })
    );
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(
            new GetTagsResponse({ data: [TestConstants.PARTIAL_MEDIA_DATA], paging: TestConstants.PAGING })
        );
    });
});
