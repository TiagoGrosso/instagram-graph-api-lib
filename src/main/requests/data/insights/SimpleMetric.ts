import { AbstractMetric } from './AbstractMetric';
import { MetricValue } from './BasicInsightsMetricData';

/**
 * Class to represent a simple metric.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export class SimpleMetric extends AbstractMetric<MetricValue<number>[]> {
    /**
     * Gets the metric values that match the provided expression.
     *
     * @param expression expression to match the values to.
     *
     * @returns the metric values that match the provided expression.
     */
    public getByExpression(expression: (elem: MetricValue<number>) => boolean): MetricValue<number>[] {
        return this.metricData.values.filter(expression);
    }

    /**
     * Gets the metric values greater than the provided limit.
     *
     * @param limit the limit.
     *
     * @returns the metric values greater than the provided limit.
     */
    public getGreaterThan(limit: number): MetricValue<number>[] {
        return this.getByExpression((elem) => elem.value > limit);
    }

    /**
     * Gets the metric values greater than or equal to the provided limit.
     *
     * @param limit the limit.
     *
     * @returns the metric values greater than or equal to the provided limit.
     */
    public getGreaterThanOrEqual(limit: number): MetricValue<number>[] {
        return this.getByExpression((elem) => elem.value >= limit);
    }

    /**
     * Gets the metric values smaller than the provided limit.
     *
     * @param limit the limit.
     *
     * @returns the metric values smaller than the provided limit.
     */
    public getLessThan(limit: number): MetricValue<number>[] {
        return this.getByExpression((elem) => elem.value < limit);
    }

    /**
     * Gets the metric values smaller than or equal to the provided limit.
     *
     * @param limit the limit.
     *
     * @returns the metric values smaller than or equal to the provided limit.
     */
    public getLessThanOrEqual(limit: number): MetricValue<number>[] {
        return this.getByExpression((elem) => elem.value <= limit);
    }

    /**
     * Gets the metric values equal to the provided value.
     *
     * @param value the limit.
     *
     * @returns the metric values equal to the provided value.
     */
    public getEqual(value: number): MetricValue<number>[] {
        return this.getByExpression((elem) => elem.value === value);
    }

    /**
     * Gets the metric values between the provided bounds (non-inclusive).
     *
     * @param lower the lower bound.
     * @param upper the upper bound.
     *
     * @returns the metric values between the provided bounds (non-inclusive).
     */
    public getBetween(lower: number, upper: number): MetricValue<number>[] {
        return this.getByExpression((elem) => upper > elem.value && elem.value > lower);
    }

    /**
     * Returns the the highest value of the metric. In case of a tie, the first value found is returned.
     *
     * @returns the highest value of the metric.
     */
    public getHighest(): MetricValue<number> | undefined {
        let highest: MetricValue<number> | undefined;
        this.metricData.values.forEach((metric) => {
            if (highest == undefined || metric.value > highest.value) {
                highest = metric;
            }
        });
        return highest;
    }

    /**
     * Returns the the lowest value of the metric. In case of a tie, the first value found is returned.
     *
     * @returns the lowest value of the metric.
     */
    public getLowest(): MetricValue<number> | undefined {
        let lowest: MetricValue<number> | undefined;
        this.metricData.values.forEach((metric) => {
            if (lowest == undefined || metric.value < lowest.value) {
                lowest = metric;
            }
        });
        return lowest;
    }
}
