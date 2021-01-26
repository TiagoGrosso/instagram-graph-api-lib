import { GetMediaInsightsResponse } from '../../../../main/requests/media/insights/GetMediaInsightsResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetMediaInsightsResponse', () => {
    let response: GetMediaInsightsResponse = new GetMediaInsightsResponse({
        data: TestConstants.SIMPLE_METRIC_DATA,
    });

    it('Correctly creates the metrics', () => {
        response.getMetrics().forEach((metric) => {
            expect(TestConstants.SIMPLE_METRIC_DATA).toContain(metric.getMetricData());
        });
    });
});
