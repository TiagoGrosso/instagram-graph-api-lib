import { AxiosResponse } from 'axios';
import { LifetimeMetric, MetricPeriod } from '../../../Enums';
import { AbstractPageInsightsRequest } from './AbstractPageInsightsRequest';
import { PageInsightsLifetimeMetricResponse } from './PageInsightsLifetimeMetricResponse';

export class PageInsightsLifetimeRequest extends AbstractPageInsightsRequest<
    LifetimeMetric,
    PageInsightsLifetimeMetricResponse
> {
    constructor(accessToken: string, pageId: string, ...metrics: LifetimeMetric[]) {
        let metricsSet: Set<LifetimeMetric> =
            metrics.length > 0 ? new Set(metrics) : new Set(Object.values(LifetimeMetric));
        super(accessToken, pageId, metricsSet);
    }

    protected parseResponse(response: AxiosResponse<any>): PageInsightsLifetimeMetricResponse {
        return new PageInsightsLifetimeMetricResponse(response.data);
    }

    protected getPeriod(): MetricPeriod {
        return MetricPeriod.LIFETIME;
    }
}
