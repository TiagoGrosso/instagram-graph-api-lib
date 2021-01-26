import { AxiosResponse } from 'axios';
import { DayMetric, WeekAndMonthMetric } from '../../../Enums';
import { AbstractGetPageInsightsRequest } from './AbstractGetPageInsightsRequest';
import { GetPageTimedInsightsResponse } from './GetPageTimedInsightsResponse';

export abstract class AbstractGetPageTimedInsightsRequest<
    T extends DayMetric | WeekAndMonthMetric
> extends AbstractGetPageInsightsRequest<T, GetPageTimedInsightsResponse> {
    protected parseResponse(response: AxiosResponse<any>): GetPageTimedInsightsResponse {
        return new GetPageTimedInsightsResponse(response.data);
    }
}
