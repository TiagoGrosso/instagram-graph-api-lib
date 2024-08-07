import { DayMetric, WeekAndMonthMetric } from '../../../Enums';
import { AbstractGetPageInsightsRequest } from './AbstractGetPageInsightsRequest';
import { GetPageTimedInsightsResponse } from './GetPageTimedInsightsResponse';
import { BasicInsightsMetricData, MetricValue } from '../../data/insights/BasicInsightsMetricData';
import { PagingData } from '../../data/Paging';

/**
 * An abstract class to represent Page Insights Get Requests that query a metric that is time bound.
 *
 * @param T the type of the metrics of the request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.2.0
 */
export abstract class AbstractGetPageTimedInsightsRequest<
    T extends DayMetric | WeekAndMonthMetric,
> extends AbstractGetPageInsightsRequest<T, GetPageTimedInsightsResponse> {
    /**
     * @inheritdoc
     */
    protected parseResponse(response: {
        data: BasicInsightsMetricData<MetricValue<number>[]>[];
        paging: PagingData;
    }): GetPageTimedInsightsResponse {
        return new GetPageTimedInsightsResponse(response);
    }
}
