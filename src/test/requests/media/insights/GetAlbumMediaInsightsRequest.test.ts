import fetchMock from 'jest-fetch-mock';
import { AlbumMetric } from '../../../../main/Enums';
import { GetAlbumMediaInsightsRequest } from '../../../../main/requests/media/insights/GetAlbumMediaInsightsRequest';
import { GetMediaInsightsResponse } from '../../../../main/requests/media/insights/GetMediaInsightsResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetAlbumMediaInsightsRequest', () => {
    const request = new GetAlbumMediaInsightsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID,
        AlbumMetric.CAROUSEL_ALBUM_IMPRESSIONS,
        AlbumMetric.CAROUSEL_ALBUM_REACH
    );
    const allFieldsRequest = new GetAlbumMediaInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID);

    it('Builds the config', () => {
        expect(request.config().params.metric).toEqual(
            [AlbumMetric.CAROUSEL_ALBUM_IMPRESSIONS, AlbumMetric.CAROUSEL_ALBUM_REACH].join(',')
        );
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.MEDIA_ID}/insights`);
        expect(allFieldsRequest.config().params.metric).toEqual(Object.values(AlbumMetric).join(','));
    });

    fetchMock.enableMocks();
    fetchMock.mockOnce(
        JSON.stringify({
            data: TestConstants.SIMPLE_METRIC_DATA,
        })
    );
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(new GetMediaInsightsResponse({ data: TestConstants.SIMPLE_METRIC_DATA }));
    });
});
