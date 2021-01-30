import { AbstractMetric } from '../../../../main/requests/data/insights/AbstractMetric';
import { MetricValue } from '../../../../main/requests/data/insights/BasicInsightsMetricData';
import { TestConstants } from '../../../TestConstants';

describe('AbstractMetric', () => {
    class MetricImpl extends AbstractMetric<MetricValue<number>[]> {}
    const metric = new MetricImpl(TestConstants.SIMPLE_METRIC_DATA[0]);
    it('Gets the metric data', () => {
        expect(metric.getMetricData()).toEqual(TestConstants.SIMPLE_METRIC_DATA[0]);
    });

    it('Gets the metric name', () => {
        expect(metric.getMetricName()).toEqual(TestConstants.SIMPLE_METRIC_DATA[0].name);
    });

    it('Gets the metric period', () => {
        expect(metric.getMetricPeriod()).toEqual(TestConstants.SIMPLE_METRIC_DATA[0].period);
    });

    it('Gets the metric title', () => {
        expect(metric.getMetricTitle()).toEqual(TestConstants.SIMPLE_METRIC_DATA[0].title);
    });

    it('Gets the metric description', () => {
        expect(metric.getMetricDescription()).toEqual(TestConstants.SIMPLE_METRIC_DATA[0].description);
    });

    it('Gets the metric id', () => {
        expect(metric.getMetricId()).toEqual(TestConstants.SIMPLE_METRIC_DATA[0].id);
    });

    it('Gets the metric values', () => {
        expect(metric.getMetricValues()).toEqual(TestConstants.SIMPLE_METRIC_DATA[0].values);
    });
});
