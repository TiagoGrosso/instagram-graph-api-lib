import { SimpleMetric } from '../../../../main/requests/data/insights/SimpleMetric';
import { TestConstants } from '../../../TestConstants';

describe('SimpleMetric', () => {
    const metric = new SimpleMetric(TestConstants.SIMPLE_METRIC_DATA[0]);
    const emptyMetric = new SimpleMetric(TestConstants.SIMPLE_METRIC_DATA[1]);

    it('Gets greater than', () => {
        expect(metric.getGreaterThan(100).sort()).toEqual(
            [TestConstants.SIMPLE_METRIC_VALUES[0], TestConstants.SIMPLE_METRIC_VALUES[2]].sort()
        );
        expect(emptyMetric.getGreaterThan(100)).toEqual([]);
    });

    it('Gets greater than or equal', () => {
        expect(metric.getGreaterThanOrEqual(100).sort()).toEqual(
            [
                TestConstants.SIMPLE_METRIC_VALUES[0],
                TestConstants.SIMPLE_METRIC_VALUES[1],
                TestConstants.SIMPLE_METRIC_VALUES[2],
            ].sort()
        );
        expect(emptyMetric.getGreaterThanOrEqual(100)).toEqual([]);
    });

    it('Gets less than', () => {
        expect(metric.getLessThan(200)).toContain(TestConstants.SIMPLE_METRIC_VALUES[1]);
    });

    it('Gets less than or equal', () => {
        expect(metric.getLessThanOrEqual(200).sort()).toEqual(
            [TestConstants.SIMPLE_METRIC_VALUES[0], TestConstants.SIMPLE_METRIC_VALUES[1]].sort()
        );
        expect(emptyMetric.getLessThanOrEqual(200)).toEqual([]);
    });

    it('Gets equal to', () => {
        expect(metric.getEqual(200)).toEqual([TestConstants.SIMPLE_METRIC_VALUES[0]]);
        expect(emptyMetric.getEqual(200)).toEqual([]);
    });

    it('Gets between', () => {
        expect(metric.getBetween(199, 301).sort()).toEqual(
            [TestConstants.SIMPLE_METRIC_VALUES[0], TestConstants.SIMPLE_METRIC_VALUES[2]].sort()
        );
        expect(emptyMetric.getBetween(199, 301)).toEqual([]);
    });

    it('Gets the highest', () => {
        expect(metric.getHighest()).toEqual(TestConstants.SIMPLE_METRIC_VALUES[2]);
        expect(emptyMetric.getHighest()).toBeUndefined();
    });

    it('Gets the lowest', () => {
        expect(metric.getLowest()).toEqual(TestConstants.SIMPLE_METRIC_VALUES[1]);
        expect(emptyMetric.getLowest()).toBeUndefined();
    });
});
