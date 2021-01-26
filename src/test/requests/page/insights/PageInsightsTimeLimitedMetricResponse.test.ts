import { Paging } from '../../../../main/requests/data/Paging';
import { PageInsightsTimeLimitedMetricResponse } from '../../../../main/requests/page/insights/PageInsightsTimeLimitedMetricResponse';
import { TestConstants } from '../../../TestConstants';

describe('PageInsightsLifetimeMetricResponse', () => {
    let response: PageInsightsTimeLimitedMetricResponse = new PageInsightsTimeLimitedMetricResponse({
        data: TestConstants.SIMPLE_METRIC_DATA,
        paging: TestConstants.PAGING,
    });

    it('Correctly creates the metrics', () => {
        response.getMetrics().forEach((metric) => {
            expect(TestConstants.SIMPLE_METRIC_DATA).toContain(metric.getMetricData());
        });
    });

    it('Gets the paging', () => {
        expect(response.getPaging()).toEqual(new Paging(TestConstants.PAGING));
    });
});
