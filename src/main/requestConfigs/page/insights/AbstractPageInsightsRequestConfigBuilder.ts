import { DayMetric, LifetimeMetric, MetricPeriod, WeekAndMonthMetric } from "../../../Enums";
import { AbstractRequestConfigBuilder } from "../../AbstractRequestConfigBuilder";

/**
 * Abstract builder for Page Insights Requests.
 * 
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export abstract class AbstractPageInsightsRequestConfigBuilder extends AbstractRequestConfigBuilder {

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
    constructor(accessToken: string, pageId: string, metrics: DayMetric[] | WeekAndMonthMetric[] | LifetimeMetric[]) {
        super(accessToken);
        this.pageId = pageId;
        this.params.metric = metrics.join();
        this.params.period = this.getPeriod();
    }

    /**
     * @inheritdoc
     */
    public getPath(): string {
        return `/${this.pageId}/insights`;
    }

    protected abstract getPeriod(): MetricPeriod;
}
