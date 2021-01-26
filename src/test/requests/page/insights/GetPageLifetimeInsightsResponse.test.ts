import { GetPageLifetimeInsightsResponse } from '../../../../main/requests/page/insights/GetPageLifetimeInsightsResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetPageLifetimeInsightsResponse', () => {
    let response: GetPageLifetimeInsightsResponse = new GetPageLifetimeInsightsResponse({
        data: TestConstants.COMPLEX_METRIC_DATA,
    });

    it('Correctly creates the metrics', () => {
        response.getMetrics().forEach((metric) => {
            expect(TestConstants.COMPLEX_METRIC_DATA).toContain(metric.getMetricData());
        });
    });
});
