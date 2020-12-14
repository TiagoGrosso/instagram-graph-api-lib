import { MediaInsightsResponse } from './../../../main/responses/media/MediaInsightsResponse';
import { TestConstants } from './../../TestConstants';

describe('MediaInsightsResponse', () => {
    let response: MediaInsightsResponse = new MediaInsightsResponse({
        data: TestConstants.SIMPLE_METRIC_DATA,
    });

    it('Correctly creates the metrics', () => {
        response.getMetrics().forEach((metric) => {
            expect(TestConstants.SIMPLE_METRIC_DATA).toContain(metric.getMetricData());
        });
    });
});
