import { ComplexMetric } from '../../../../main/responses/data/insights/ComplexMetric';
import { TestConstants } from '../../../TestConstants';

describe('ComplexMetric', () => {
    let metric = new ComplexMetric(TestConstants.COMPLEX_METRIC_DATA[0]);

    it('Gets the value', () => {
        expect(metric.getValue()).toEqual(TestConstants.COMPLEX_METRIC_DATA[0].values[0].value);
    });

    it('Gets the end time', () => {
        expect(metric.getEndTime()).toEqual(new Date(TestConstants.COMPLEX_METRIC_DATA[0].values[0].end_time));
    });

    it('Gets greater than', () => {
        expect(metric.getKeysByGreaterThan(500)).toEqual(['France']);
    });

    it('Gets greater than or equal', () => {
        expect(metric.getKeysByGreaterThanOrEqualTo(500).sort()).toEqual(['France', 'Spain'].sort());
    });

    it('Gets less than', () => {
        expect(metric.getKeysByLessThan(500)).toEqual(['Portugal']);
    });

    it('Gets less than or equal', () => {
        expect(metric.getKeysByLessThanOrEqualTo(500).sort()).toEqual(['Portugal', 'Spain'].sort());
    });

    it('Gets equal to', () => {
        expect(metric.getKeysByEqualTo(100)).toEqual(['Portugal']);
    });

    it('Filters by greater than', () => {
        expect(metric.getByGreaterThan(500)).toEqual({
            France: 1000,
        });
    });

    it('Filters by greater than or equal', () => {
        expect(metric.getByGreaterThanOrEqualTo(500)).toEqual({
            France: 1000,
            Spain: 500,
        });
    });

    it('Filters by less than', () => {
        expect(metric.getByLessThan(500)).toEqual({
            Portugal: 100,
        });
    });

    it('Filters by less than or equal', () => {
        expect(metric.getByLessThanOrEqualTo(500)).toEqual({
            Portugal: 100,
            Spain: 500,
        });
    });

    it('Filters by keys', () => {
        expect(metric.getByKeys('Portugal', 'Spain')).toEqual({
            Portugal: 100,
            Spain: 500,
        });
    });
});
