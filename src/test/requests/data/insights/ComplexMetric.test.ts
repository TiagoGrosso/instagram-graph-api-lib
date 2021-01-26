import { ComplexMetric } from '../../../../main/requests/data/insights/ComplexMetric';
import { TestConstants } from '../../../TestConstants';

describe('ComplexMetric', () => {
    let metric = new ComplexMetric(TestConstants.COMPLEX_METRIC_DATA[0]);
    let emptyMetric = new ComplexMetric(TestConstants.EMPTY_COMPLEX_METRIC_DATA[0]);

    it('Gets the value', () => {
        expect(metric.getValue()).toEqual(TestConstants.COMPLEX_METRIC_DATA[0].values[0].value);
        expect(emptyMetric.getValue()).toEqual({});
    });

    it('Gets the end time', () => {
        expect(metric.getEndTime()).toEqual(new Date(TestConstants.COMPLEX_METRIC_DATA[0].values[0].end_time));
        expect(emptyMetric.getEndTime()).toEqual(
            new Date(TestConstants.EMPTY_COMPLEX_METRIC_DATA[0].values[0].end_time)
        );
    });

    it('Gets greater than', () => {
        expect(metric.getKeysByGreaterThan(500)).toEqual(['France']);
        expect(emptyMetric.getKeysByGreaterThan(500)).toEqual([]);
    });

    it('Gets greater than or equal', () => {
        expect(metric.getKeysByGreaterThanOrEqualTo(500).sort()).toEqual(['France', 'Spain'].sort());
        expect(emptyMetric.getKeysByGreaterThanOrEqualTo(100)).toEqual([]);
    });

    it('Gets less than', () => {
        expect(metric.getKeysByLessThan(500)).toEqual(['Portugal']);
        expect(emptyMetric.getKeysByLessThanOrEqualTo(100)).toEqual([]);
    });

    it('Gets less than or equal', () => {
        expect(metric.getKeysByLessThanOrEqualTo(500).sort()).toEqual(['Portugal', 'Spain'].sort());
        expect(emptyMetric.getKeysByLessThanOrEqualTo(500)).toEqual([]);
    });

    it('Gets equal to', () => {
        expect(metric.getKeysByEqualTo(100)).toEqual(['Portugal']);
        expect(emptyMetric.getKeysByEqualTo(100)).toEqual([]);
    });

    it('Filters by greater than', () => {
        expect(metric.getByGreaterThan(500)).toEqual({
            France: 1000,
        });
        expect(emptyMetric.getByGreaterThan(1)).toEqual({});
    });

    it('Filters by greater than or equal', () => {
        expect(metric.getByGreaterThanOrEqualTo(500)).toEqual({
            France: 1000,
            Spain: 500,
        });
        expect(emptyMetric.getByGreaterThanOrEqualTo(1)).toEqual({});
    });

    it('Filters by less than', () => {
        expect(metric.getByLessThan(500)).toEqual({
            Portugal: 100,
        });
        expect(emptyMetric.getByLessThan(1)).toEqual({});
    });

    it('Filters by less than or equal', () => {
        expect(metric.getByLessThanOrEqualTo(500)).toEqual({
            Portugal: 100,
            Spain: 500,
        });
        expect(emptyMetric.getByLessThanOrEqualTo(1)).toEqual({});
    });

    it('Filters by keys', () => {
        expect(metric.getByKeys('Portugal', 'Spain', 'N/A')).toEqual({
            Portugal: 100,
            Spain: 500,
        });
        expect(emptyMetric.getByKeys('N/A')).toEqual({});
    });

    it('Gets the highest', () => {
        expect(metric.getHighest()).toEqual({ key: 'France', value: 1000 });
        expect(emptyMetric.getHighest()).toBeUndefined();
    });

    it('Gets the highest key', () => {
        expect(metric.getHighestKey()).toEqual('France');
        expect(emptyMetric.getHighestKey()).toBeUndefined();
    });

    it('Gets the lowest', () => {
        expect(metric.getLowest()).toEqual({ key: 'Portugal', value: 100 });
        expect(emptyMetric.getLowest()).toBeUndefined();
    });

    it('Gets the lowest key', () => {
        expect(metric.getLowestKey()).toEqual('Portugal');
        expect(emptyMetric.getLowestKey()).toBeUndefined();
    });
});
