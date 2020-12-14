import { DayMetric, MetricPeriod } from "../../../Enums";
import { AbstractPageInsightsRequestConfigBuilder } from "./AbstractPageInsightsRequestConfigBuilder";

/**
 * Builder for Page Insights Requests that fetch day metrics.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */

export class PageInsightsDayRequestConfigBuilder extends AbstractPageInsightsRequestConfigBuilder {

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param pageId the page ID.
     * @param metrics the metrics definitions.
     */
    constructor(accessToken: string, pageId: string, metrics: DayMetric[]) {
        super(accessToken, pageId, metrics);
    }

    /**
     * @inheritdoc
     */
    public getPeriod(): MetricPeriod {
        return MetricPeriod.DAY;
    }
}
