import { DayMetric, LifetimeMetric, MetricPeriod, WeekAndMonthMetric } from '../../../Enums';
import { AbstractGetInsightsResponse } from '../../AbstractGetInsightsResponse';
import { AbstractRequest } from '../../AbstractRequest';

/**
 * Abstract builder for Page Insights Requests.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export abstract class AbstractGetPageInsightsRequest<
    T extends DayMetric | WeekAndMonthMetric | LifetimeMetric,
    R extends AbstractGetInsightsResponse<any>
> extends AbstractRequest<R> {
    /**
     * The id of the page.
     */
    private pageId: string;

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param pageId the page ID.
     * @param metrics the metrics definitions.
     */
    constructor(accessToken: string, pageId: string, metrics: Set<T>) {
        super(accessToken);
        this.pageId = pageId;
        this.params.metric = Array.from(metrics).join(',');
        this.params.period = this.getPeriod();
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.pageId}/insights`;
    }

    protected abstract getPeriod(): MetricPeriod;
}
