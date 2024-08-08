import fetchMock from 'jest-fetch-mock';
import { StoryMetric } from '../../../../main/Enums';
import { GetMediaInsightsResponse } from '../../../../main/requests/media/insights/GetMediaInsightsResponse';
import { GetStoryMediaInsightsRequest } from '../../../../main/requests/media/insights/GetStoryMediaInsightsRequest';
import { TestConstants } from '../../../TestConstants';

describe('GetStoryMediaInsightsRequest', () => {
    const request = new GetStoryMediaInsightsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID,
        StoryMetric.IMPRESSIONS,
        StoryMetric.TAPS_BACK
    );
    const allFieldsRequest = new GetStoryMediaInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID);

    it('Builds the config', () => {
        expect(request.config().params.metric).toEqual([StoryMetric.IMPRESSIONS, StoryMetric.TAPS_BACK].join(','));
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.MEDIA_ID}/insights`);
        expect(allFieldsRequest.config().params.metric).toEqual(Object.values(StoryMetric).join(','));
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
