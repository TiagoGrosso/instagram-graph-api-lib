import { BasicInsightsMetricData, MetricValue } from '../../data/insights/InsightsMetricData';
import { AbstractInsightsResponse } from '../../AbstractInsightsResponse';
import { ComplexMetric } from '../../data/insights/ComplexMetric';

/**
 * Class that represents a response from a Page Insights request for Lifetime metrics.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export class PageInsightsLifetimeMetricResponse extends AbstractInsightsResponse<ComplexMetric> {
    /**
     * The constructor.
     *
     * @param body the body of the response.
     */
    constructor(body: { data: BasicInsightsMetricData<MetricValue<{ [key: string]: number }>[]>[] }) {
        super(body.data.map((elem) => new ComplexMetric(elem)));
    }
}
