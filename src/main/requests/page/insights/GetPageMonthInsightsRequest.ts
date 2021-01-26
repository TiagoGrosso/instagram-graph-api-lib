import { MetricPeriod, WeekAndMonthMetric } from '../../../Enums';
import { AbstractGetPageTimedInsightsRequest } from './AbstractGetPageTimedInsightsRequest';

export class GetPageMonthInsightsRequest extends AbstractGetPageTimedInsightsRequest<WeekAndMonthMetric> {
    constructor(accessToken: string, pageId: string, ...metrics: WeekAndMonthMetric[]) {
        let metricsSet: Set<WeekAndMonthMetric> =
            metrics.length > 0 ? new Set(metrics) : new Set(Object.values(WeekAndMonthMetric));
        super(accessToken, pageId, metricsSet);
    }

    protected getPeriod(): MetricPeriod {
        return MetricPeriod.MONTH;
    }
}
