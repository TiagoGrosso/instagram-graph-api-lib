import { DayMetric, MetricPeriod } from '../../../Enums';
import { AbstractGetPageTimedInsightsRequest } from './AbstractGetPageTimedInsightsRequest';

/**
 * A Page Insights Get Request that queries a day metric.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.2.0
 */
export class GetPageDayInsightsRequest extends AbstractGetPageTimedInsightsRequest<DayMetric> {
    /**
     * The constructor.
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     */
    constructor(accessToken: string, pageId: string, ...metrics: DayMetric[]) {
        let metricsSet: Set<DayMetric> = metrics.length > 0 ? new Set(metrics) : new Set(Object.values(DayMetric));
        super(accessToken, pageId, metricsSet);
    }

    /**
     * @inheritdoc
     */
    protected period(): MetricPeriod {
        return MetricPeriod.DAY;
    }
}
