import { AbstractGetInsightsResponse } from '../../AbstractGetInsightsResponse';
import { BasicInsightsMetricData, MetricValue } from '../../data/insights/BasicInsightsMetricData';
import { SimpleMetric } from '../../data/insights/SimpleMetric';
import { Paging, PagingData } from '../../data/Paging';

/**
 * Class that represents a response from a Page Insights request for Day, Week or Month metrics.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export class GetPageTimedInsightsResponse extends AbstractGetInsightsResponse<SimpleMetric> {
    /**
     * The paging of the response.
     */
    private paging: Paging;

    /**
     * The constructor.
     *
     * @param body the body of the response.
     */
    constructor(body: { data: BasicInsightsMetricData<MetricValue<number>[]>[]; paging: PagingData }) {
        super(body.data.map((elem) => new SimpleMetric(elem)));
        this.paging = new Paging(body.paging);
    }

    /**
     * Gets the paging.
     *
     * @returns the paging.
     */
    public getPaging(): Paging {
        return this.paging;
    }
}
