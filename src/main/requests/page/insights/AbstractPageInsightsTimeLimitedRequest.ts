import { AxiosResponse } from 'axios';
import { DayMetric, WeekAndMonthMetric } from '../../../Enums';
import { AbstractPageInsightsRequest } from './AbstractPageInsightsRequest';
import { PageInsightsTimeLimitedMetricResponse } from './PageInsightsTimeLimitedMetricResponse';

export abstract class AbstractPageInsightsTimeLimitedRequest<
    T extends DayMetric | WeekAndMonthMetric
> extends AbstractPageInsightsRequest<T, PageInsightsTimeLimitedMetricResponse> {
    protected parseResponse(response: AxiosResponse<any>): PageInsightsTimeLimitedMetricResponse {
        return new PageInsightsTimeLimitedMetricResponse(response.data);
    }
}
