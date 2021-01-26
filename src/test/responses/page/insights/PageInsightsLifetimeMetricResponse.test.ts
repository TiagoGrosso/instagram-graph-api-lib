import { PageInsightsLifetimeMetricResponse } from '../../../../main/requests/page/insights/PageInsightsLifetimeMetricResponse';
import { TestConstants } from '../../../TestConstants';

describe('PageInsightsLifetimeMetricResponse', () => {
    let response: PageInsightsLifetimeMetricResponse = new PageInsightsLifetimeMetricResponse({
        data: TestConstants.COMPLEX_METRIC_DATA,
    });

    it('Correctly creates the metrics', () => {
        response.getMetrics().forEach((metric) => {
            expect(TestConstants.COMPLEX_METRIC_DATA).toContain(metric.getMetricData());
        });
    });
});
