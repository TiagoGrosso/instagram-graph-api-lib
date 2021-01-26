import { AbstractResponse } from './AbstractResponse';
import { AbstractMetric } from './data/insights/AbstractMetric';

/**
 * Base class for representing a response from a Page Insights request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export abstract class AbstractGetInsightsResponse<T extends AbstractMetric<any>> extends AbstractResponse<T[]> {
    /**
     * The constructor.
     *
     * @param body the body of the response.
     */
    constructor(data: T[]) {
        super(data);
    }

    /**
     * Gets the metrics in the response.
     *
     * @returns the metrics in the response.
     */
    public getMetrics(): T[] {
        return this.data;
    }

    /**
     * Finds the first metric that matches the given expression. Returns undefined if no match is found.
     *
     * @param expression the expression to match with the metric.
     *
     * @returns the first metric that matches the given expression or undefined if no match is found.
     */
    public getMetricByExpression(expression: (metric: T) => boolean): T | undefined {
        return this.data.find(expression);
    }

    /**
     * Finds all the metrics that match the given expression.
     *
     * @param expression the expression to match with the metrics.
     *
     * @returns an array of the metrics that match the expression.
     */
    public getMetricsByExpression(expression: (metric: T) => boolean): T[] {
        return this.data.filter(expression);
    }

    /**
     * Finds the metric with the given name. Returns undefined if not found.
     *
     * @param name the name of the metric.
     * @param ignoreCase whether to ignore the case of the name. True by default.
     *
     * @returns the metric with the given name or undefined if not found.
     */
    public getMetricByName(name: string, ignoreCase: boolean = true): T | undefined {
        let sensitivity = ignoreCase ? { sensitivity: 'accent' } : { sensitivity: 'case' };
        return this.getMetricByExpression(
            (metric) => metric.getMetricName().localeCompare(name, undefined, sensitivity) === 0
        );
    }

    /**
     * Finds all the metrics whose names match the given regex.
     *
     * @param name the regex.
     *
     * @returns the metrics whose names match the given regex.
     */
    public getMetricsByRegex(regexString: string): T[] {
        let regExp = new RegExp(regexString);
        return this.getMetricsByExpression((metric) => regExp.test(metric.getMetricName()));
    }
}
