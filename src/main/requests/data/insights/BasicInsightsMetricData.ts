export interface MetricValue<T> {
    /**
     * The end time of the metric in ISO 8601.
     */
    end_time: string;

    /**
     * The value of the metric.
     */
    value: T;
}

/**
 * Interface to represent info about a metric.
 *
 * @param T the type of values.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export interface BasicInsightsMetricData<T> {
    /**
     * The name of the metric.
     */
    name: string;

    /**
     * The period of the metric.
     */
    period: string;

    /**
     * The title of the metric.
     */
    title: string;

    /**
     * The description of the metric.
     */
    description: string;

    /**
     * The id of the metric.
     */
    id: string;

    /**
     * The values of the metric.
     */
    values: T;
}
