import { SimpleMetric } from '../../../../main/responses/data/insights/SimpleMetric';
import { TestConstants } from '../../../TestConstants';

describe('SimpleMetric', () => {
    let metric = new SimpleMetric(TestConstants.SIMPLE_METRIC_DATA[0]);

    it('Gets greater than', () => {
        expect(metric.getGreaterThan(100)).toEqual([
            TestConstants.SIMPLE_METRIC_VALUES[1],
            TestConstants.SIMPLE_METRIC_VALUES[2],
        ]);
    });

    it('Gets greater than or equal', () => {
        expect(metric.getGreaterThanOrEqual(100)).toEqual([
            TestConstants.SIMPLE_METRIC_VALUES[0],
            TestConstants.SIMPLE_METRIC_VALUES[1],
            TestConstants.SIMPLE_METRIC_VALUES[2],
        ]);
    });

    it('Gets less than', () => {
        expect(metric.getLessThan(200)).toEqual([TestConstants.SIMPLE_METRIC_VALUES[0]]);
    });

    it('Gets less than or equal', () => {
        expect(metric.getLessThanOrEqual(200)).toEqual([
            TestConstants.SIMPLE_METRIC_VALUES[0],
            TestConstants.SIMPLE_METRIC_VALUES[1],
        ]);
    });

    it('Gets equal to', () => {
        expect(metric.getEqual(200)).toEqual([TestConstants.SIMPLE_METRIC_VALUES[1]]);
    });

    it('Gets between', () => {
        expect(metric.getBetween(199, 301)).toEqual([
            TestConstants.SIMPLE_METRIC_VALUES[1],
            TestConstants.SIMPLE_METRIC_VALUES[2],
        ]);
    });
});
