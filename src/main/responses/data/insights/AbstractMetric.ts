import { BasicInsightsMetricData } from './InsightsMetricData';

/**
 * Abstract class to represent a metric.
 *
 * @param T the type of the 'values' object.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export abstract class AbstractMetric<T> {
    /**
     * The metric data.
     */
    protected metricData: BasicInsightsMetricData<T>;

    /**
     * The constructor.
     *
     * @param metricData the metric data.
     */
    constructor(metricData: BasicInsightsMetricData<T>) {
        this.metricData = metricData;
    }

    /**
     * Gets the metric data.
     *
     * @returns the metric data.
     */
    public getMetricData(): BasicInsightsMetricData<T> {
        return this.metricData;
    }

    /**
     * Gets the metric name.
     *
     * @returns the metric name.
     */
    public getMetricName(): string {
        return this.metricData.name;
    }

    /**
     * Gets the metric period.
     *
     * @returns the metric period.
     */
    public getMetricPeriod(): string {
        return this.metricData.period;
    }

    /**
     * Gets the metric title.
     *
     * @returns the metric title.
     */
    public getMetricTitle(): string {
        return this.metricData.title;
    }

    /**
     * Gets the metric description.
     *
     * @returns the metric description.
     */
    public getMetricDescription(): string {
        return this.metricData.description;
    }

    /**
     * Gets the metric id.
     *
     * @returns the metric id.
     */
    public getMetricId(): string {
        return this.metricData.id;
    }

    /**
     * Gets the metric values.
     *
     * @returns the metric values.
     */
    public getMetricValues(): T {
        return this.metricData.values;
    }
}
