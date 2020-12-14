import { WeekAndMonthMetric } from '../../main/Enums';
import { AbstractInsightsResponse } from '../../main/responses/AbstractInsightsResponse';
import { SimpleMetric } from '../../main/responses/data/insights/SimpleMetric';
import { TestConstants } from '../TestConstants';

describe('AbstractInsightsResponse', () => {
    class InsightsResponseImpl extends AbstractInsightsResponse<SimpleMetric> {}

    let metrics: SimpleMetric[] = TestConstants.SIMPLE_METRIC_DATA.map((elem) => new SimpleMetric(elem));

    let response = new InsightsResponseImpl(metrics);

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
