import { DayMetric, MetricPeriod } from '../../../Enums';
import { AbstractGetPageTimedInsightsRequest } from './AbstractGetPageTimedInsightsRequest';

export class GetPageDayInsightsRequest extends AbstractGetPageTimedInsightsRequest<DayMetric> {
    constructor(accessToken: string, pageId: string, ...metrics: DayMetric[]) {
        let metricsSet: Set<DayMetric> = metrics.length > 0 ? new Set(metrics) : new Set(Object.values(DayMetric));
        super(accessToken, pageId, metricsSet);
    }

    protected getPeriod(): MetricPeriod {
        return MetricPeriod.DAY;
    }
}
