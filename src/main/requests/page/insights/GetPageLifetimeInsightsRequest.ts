import { LifetimeMetric, MetricPeriod } from '../../../Enums';
import { AbstractGetPageInsightsRequest } from './AbstractGetPageInsightsRequest';
import { GetPageLifetimeInsightsResponse } from './GetPageLifetimeInsightsResponse';
import { BasicInsightsMetricData, MetricValue } from '../../data/insights/BasicInsightsMetricData';
import { ComplexMetricValue } from '../../data/insights/ComplexMetric';

/**
 * A Page Insights Get Request that queries a lifetime metric.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.2.0
 */
export class GetPageLifetimeInsightsRequest extends AbstractGetPageInsightsRequest<
    LifetimeMetric,
    GetPageLifetimeInsightsResponse
> {
    /**
     * The constructor.
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     */
    constructor(accessToken: string, pageId: string, ...metrics: LifetimeMetric[]) {
        const metricsSet: Set<LifetimeMetric> =
            metrics.length > 0 ? new Set(metrics) : new Set(Object.values(LifetimeMetric));
        super(accessToken, pageId, metricsSet);
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: {
        data: BasicInsightsMetricData<MetricValue<ComplexMetricValue>[]>[];
    }): GetPageLifetimeInsightsResponse {
        return new GetPageLifetimeInsightsResponse(response);
    }

    /**
     * @inheritdoc
     */
    protected period(): MetricPeriod {
        return MetricPeriod.LIFETIME;
    }
}
