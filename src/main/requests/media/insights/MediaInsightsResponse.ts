import { AbstractInsightsResponse } from '../../AbstractInsightsResponse';
import { BasicInsightsMetricData, MetricValue } from '../../data/insights/BasicInsightsMetricData';
import { SimpleMetric } from '../../data/insights/SimpleMetric';

/**
 * Class to represent responses to Media Insights requests.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export class MediaInsightsResponse extends AbstractInsightsResponse<SimpleMetric> {
    /**
     * The constructor.
     *
     * @param body the body of the response.
     */
    constructor(body: { data: BasicInsightsMetricData<MetricValue<number>[]>[] }) {
        super(body.data.map((elem) => new SimpleMetric(elem)));
    }
}
