import { MetricPeriod, WeekAndMonthMetric } from '../../../Enums';
import { AbstractGetPageTimedInsightsRequest } from './AbstractGetPageTimedInsightsRequest';

/**
 * A Page Insights Get Request that queries a month metric.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export class GetPageMonthInsightsRequest extends AbstractGetPageTimedInsightsRequest<WeekAndMonthMetric> {
    /**
     * The constructor.
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     */
    constructor(accessToken: string, pageId: string, ...metrics: WeekAndMonthMetric[]) {
        let metricsSet: Set<WeekAndMonthMetric> =
            metrics.length > 0 ? new Set(metrics) : new Set(Object.values(WeekAndMonthMetric));
        super(accessToken, pageId, metricsSet);
    }

    /**
     * @inheritdoc
     */
    protected period(): MetricPeriod {
        return MetricPeriod.MONTH;
    }
}
