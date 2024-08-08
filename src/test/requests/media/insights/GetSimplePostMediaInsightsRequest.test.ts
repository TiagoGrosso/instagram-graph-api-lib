import fetchMock from 'jest-fetch-mock';
import { GetSimplePostMediaInsightsRequest } from '../../../../main/requests/media/insights/GetSimplePostMediaInsightsRequest';
import { GetMediaInsightsResponse } from '../../../../main/requests/media/insights/GetMediaInsightsResponse';
import { TestConstants } from '../../../TestConstants';
import { SimplePostMetric } from '../../../../main/Enums';

describe('GetSimplePostMediaInsightsRequest', () => {
    const request = new GetSimplePostMediaInsightsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID,
        SimplePostMetric.IMPRESSIONS,
        SimplePostMetric.ENGAGEMENT
    );
    const allFieldsRequest = new GetSimplePostMediaInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID);

    it('Builds the config', () => {
        expect(request.config().params.metric).toEqual(
            [SimplePostMetric.IMPRESSIONS, SimplePostMetric.ENGAGEMENT].join(',')
        );
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.MEDIA_ID}/insights`);
        expect(allFieldsRequest.config().params.metric).toEqual(Object.values(SimplePostMetric).join(','));
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
