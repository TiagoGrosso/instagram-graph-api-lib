import { Paging } from '../../../../main/requests/data/Paging';
import { GetPageTimedInsightsResponse } from '../../../../main/requests/page/insights/GetPageTimedInsightsResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetPageTimedInsightsResponse', () => {
    let response: GetPageTimedInsightsResponse = new GetPageTimedInsightsResponse({
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
