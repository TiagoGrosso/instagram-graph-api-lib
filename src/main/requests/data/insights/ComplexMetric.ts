import { AbstractMetric } from './AbstractMetric';
import { MetricValue, BasicInsightsMetricData } from './BasicInsightsMetricData';

/**
 * Type to represent a complex metric value.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export type ComplexMetricValue = { [key: string]: number };

/**
 * Class to represent a complex metric.
 *
 * As a metric class, it expects to receive an array of values.
 * However, for complex metrics that array has a single element.
 * This class assumes that to always be true to simplify the access the values.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export class ComplexMetric extends AbstractMetric<MetricValue<ComplexMetricValue>[]> {
    /**
     * The value.
     */
    private value: ComplexMetricValue;

    /**
     * The end time.
     */
    private endTime: Date;

    /**
     * The constructor.
     *
     * @param data the metric data.
     */
    constructor(data: BasicInsightsMetricData<MetricValue<ComplexMetricValue>[]>) {
        super(data);
        this.value = this.metricData.values[0].value;
        this.endTime = new Date(this.metricData.values[0].end_time);
    }

    /**
     * Gets the value of the metric.
     *
     * @returns the value of the metric.
     */
    public getValue(): ComplexMetricValue {
        return this.value;
    }

    /**
     * Gets the end time of the metric value.
     *
     * @returns the end time of the metric value.
     */
    public getEndTime(): Date {
        return this.endTime;
    }

    /**
     * Gets the keys that match the provided expression.
     *
     * @param expression expression to match the values to.
     *
     * @returns the keys that match the provided expression.
     */
    public getKeysByExpression(expression: (pair: [key: string, value: number]) => boolean): string[] {
        return Object.entries(this.value)
            .filter(expression)
            .map(([key]) => key);
    }

    /**
     * Gets the keys of the values that are greater than the provided limit.
     *
     * @param limit the limit.
     *
     * @returns the keys of the values that are greater than the provided limit.
     */
    public getKeysByGreaterThan(limit: number): string[] {
        return this.getKeysByExpression(([, value]) => value > limit);
    }

    /**
     * Gets the keys of the values that are greater than or equal to the provided limit.
     *
     * @param limit the limit.
     *
     * @returns the keys of the values that are greater than or equal to the provided limit.
     */
    public getKeysByGreaterThanOrEqualTo(limit: number): string[] {
        return this.getKeysByExpression(([, value]) => value >= limit);
    }

    /**
     * Gets the keys of the values that are smaller than to the provided limit.
     *
     * @param limit the limit.
     *
     * @returns the keys of the values that are smaller than to the provided limit.
     */
    public getKeysByLessThan(limit: number): string[] {
        return this.getKeysByExpression(([, value]) => value < limit);
    }

    /**
     * Gets the keys of the values that are smaller than or equal to the provided limit.
     *
     * @param limit the limit.
     *
     * @returns the keys of the values that are smaller than or equal to the provided limit.
     */
    public getKeysByLessThanOrEqualTo(limit: number): string[] {
        return this.getKeysByExpression(([, value]) => value <= limit);
    }

    /**
     * Gets the keys of the values that are equal to the provided value.
     *
     * @param valueToCompare the value to compare to.
     *
     * @returns the keys of the values that are equal to the provided value.
     */
    public getKeysByEqualTo(valueToCompare: number): string[] {
        return this.getKeysByExpression(([, value]) => value === valueToCompare);
    }

    /**
     * Gets the entries that match the provided expression.
     *
     * @param expression expression to match the values to.
     *
     * @returns the entries that match the provided expression.
     */
    public getByExpression(expression: (pair: [key: string, value: number]) => boolean): ComplexMetricValue {
        let filtered: ComplexMetricValue = {};

        Object.entries(this.value)
            .filter(expression)
            .forEach(([key, value]) => (filtered[key] = value));

        return filtered;
    }

    /**
     * Gets the entries of the values that are greater than the provided limit.
     *
     * @param limit the limit.
     *
     * @returns the entries of the values that are greater than the provided limit.
     */
    public getByGreaterThan(limit: number): ComplexMetricValue {
        return this.getByExpression(([, value]) => value > limit);
    }

    /**
     * Gets the entries of the values that are greater than or equal to the provided limit.
     *
     * @param limit the limit.
     *
     * @returns the entries of the values that are greater than or equal to the provided limit.
     */
    public getByGreaterThanOrEqualTo(limit: number): ComplexMetricValue {
        return this.getByExpression(([, value]) => value >= limit);
    }

    /**
     * Gets the entries of the values that are equal than the provided limit.
     *
     * @param limit the limit.
     *
     * @returns the entries of the values that are equal than the provided limit.
     */
    public getByLessThan(limit: number): ComplexMetricValue {
        return this.getByExpression(([, value]) => value < limit);
    }

    /**
     * Gets the entries of the values that are greater than or equal to the provided limit.
     *
     * @param limit the limit.
     *
     * @returns the entries of the values that are greater than or equal to the provided limit.
     */
    public getByLessThanOrEqualTo(limit: number): ComplexMetricValue {
        return this.getByExpression(([, value]) => value <= limit);
    }

    /**
     * Gets the entries of the provided keys.
     *
     * @param limit the limit.
     *
     * @returns the entries of the provided keys.
     */
    public getByKeys(...keys: string[]): ComplexMetricValue {
        return this.getByExpression(([key]) => keys.includes(key));
    }

    /**
     * Returns the highest value of the metric. In case of a tie, the first value found is returned.
     *
     * @returns the highest value of the metric.
     */
    public getHighest(): { key: string; value: number } | undefined {
        let highest: { key: string; value: number } | undefined;
        Object.entries(this.value).forEach(([key, value]) => {
            if (highest == undefined || value > highest.value) {
                highest = { key: key, value: value };
            }
        });
        return highest;
    }

    /**
     * Returns the key of the highest value of the metric. In case of a tie, the key of the first value found is returned.
     *
     * @returns the key of highest value of the metric.
     */
    public getHighestKey(): string | undefined {
        return this.getHighest()?.key;
    }

    /**
     * Returns the highest value of the metric. In case of a tie, the first value found is returned.
     *
     * @returns the highest value of the metric.
     */
    public getLowest(): { key: string; value: number } | undefined {
        let lowest: { key: string; value: number } | undefined;
        Object.entries(this.value).forEach(([key, value]) => {
            if (lowest == undefined || value < lowest.value) {
                lowest = { key: key, value: value };
            }
        });
        return lowest;
    }

    /**
     * Returns the key of the lowest value of the metric. In case of a tie, the key of the first value found is returned.
     *
     * @returns the key of lowest value of the metric.
     */
    public getLowestKey(): string | undefined {
        return this.getLowest()?.key;
    }
}
