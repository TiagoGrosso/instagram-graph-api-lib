import { WeekAndMonthMetric } from '../../main/Enums';
import { AbstractGetInsightsResponse } from '../../main/requests/AbstractGetInsightsResponse';
import { SimpleMetric } from '../../main/requests/data/insights/SimpleMetric';
import { TestConstants } from '../TestConstants';

describe('AbstractGetInsightsResponse', () => {
    class InsightsResponseImpl extends AbstractGetInsightsResponse<SimpleMetric> {}

    const metrics: SimpleMetric[] = TestConstants.SIMPLE_METRIC_DATA.map((elem) => new SimpleMetric(elem));

    const response = new InsightsResponseImpl(metrics);

    it('Gets metrics', () => {
        expect(response.getMetrics()).toEqual(metrics);
    });

    it('Gets metrics by name', () => {
        expect(response.getMetricByName(WeekAndMonthMetric.REACH)?.getMetricData()).toEqual(
            TestConstants.SIMPLE_METRIC_DATA[0]
        );
        expect(
            response.getMetricByName(WeekAndMonthMetric.REACH.toUpperCase(), false)?.getMetricData()
        ).toBeUndefined();
    });

    it('Gets metrics by regex', () => {
        expect(response.getMetricsByRegex('.*impr.*')[0].getMetricData()).toEqual(TestConstants.SIMPLE_METRIC_DATA[1]);
        expect(response.getMetricsByRegex('.*rea.*')[0].getMetricData()).toEqual(TestConstants.SIMPLE_METRIC_DATA[0]);
        expect(response.getMetricsByRegex('.*re.*')).toEqual(metrics);
    });
});
