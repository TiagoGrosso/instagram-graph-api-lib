import { MetricPeriod, WeekAndMonthMetric } from "../../../Enums";
import { AbstractPageInsightsRequestConfigBuilder } from "./AbstractPageInsightsRequestConfigBuilder";

/**
 * Builder for Page Insights Requests that fetch week metrics.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */

export class PageInsightsWeekRequestConfigBuilder extends AbstractPageInsightsRequestConfigBuilder {

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param pageId the page ID.
     * @param metrics the metrics definitions.
     */
    constructor(accessToken: string, pageId: string, metrics: WeekAndMonthMetric[]) {
        super(accessToken, pageId, metrics);
    }

    /**
     * @inheritdoc
     */
    public getPeriod(): MetricPeriod {
        return MetricPeriod.WEEK;
    }
}
