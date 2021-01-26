import { AxiosResponse } from 'axios';
import { LifetimeMetric, MetricPeriod } from '../../../Enums';
import { AbstractGetPageInsightsRequest } from './AbstractGetPageInsightsRequest';
import { GetPageLifetimeInsightsResponse } from './GetPageLifetimeInsightsResponse';

export class GetPageLifetimeInsightsRequest extends AbstractGetPageInsightsRequest<
    LifetimeMetric,
    GetPageLifetimeInsightsResponse
> {
    constructor(accessToken: string, pageId: string, ...metrics: LifetimeMetric[]) {
        let metricsSet: Set<LifetimeMetric> =
            metrics.length > 0 ? new Set(metrics) : new Set(Object.values(LifetimeMetric));
        super(accessToken, pageId, metricsSet);
    }

    protected parseResponse(response: AxiosResponse<any>): GetPageLifetimeInsightsResponse {
        return new GetPageLifetimeInsightsResponse(response.data);
    }

    protected getPeriod(): MetricPeriod {
        return MetricPeriod.LIFETIME;
    }
}
