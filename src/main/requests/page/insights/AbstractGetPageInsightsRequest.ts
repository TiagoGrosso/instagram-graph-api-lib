import { DayMetric, LifetimeMetric, MetricPeriod, WeekAndMonthMetric } from '../../../Enums';
import { AbstractGetInsightsResponse } from '../../AbstractGetInsightsResponse';
import { AbstractRequest } from '../../AbstractRequest';
import { AbstractMetric } from '../../data/insights/AbstractMetric';

/**
 * An abstract class to represent Page Insights Get Requests.
 *
 * @param T the type of the metrics of the request.
 * @param R the type of the response.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.2.0
 */
export abstract class AbstractGetPageInsightsRequest<
    T extends DayMetric | WeekAndMonthMetric | LifetimeMetric,
    R extends AbstractGetInsightsResponse<AbstractMetric<unknown>>
> extends AbstractRequest<R> {
    /**
     * The id of the page.
     */
    private readonly pageId: string;

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param pageId the page ID.
     * @param metrics the metrics definitions.
     */
    protected constructor(accessToken: string, pageId: string, metrics: Set<T>) {
        super(accessToken);
        this.pageId = pageId;
        this.params.metric = Array.from(metrics).join(',');
        this.params.period = this.period();
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.pageId}/insights`;
    }

    /**
     * Gets the metric period.
     *
     * @returns the metric period.
     */
    protected abstract period(): MetricPeriod;
}
