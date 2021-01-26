import { WeekAndMonthMetric, MetricPeriod } from '../../../../main/Enums';
import { GetPageMonthInsightsRequest } from '../../../../main/requests/page/insights/GetPageMonthInsightsRequest';
import { TestConstants } from '../../../TestConstants';

describe('GetPageMonthInsightsRequest', () => {
    let request: GetPageMonthInsightsRequest = new GetPageMonthInsightsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        WeekAndMonthMetric.REACH,
        WeekAndMonthMetric.IMPRESSIONS
    );
    let allFieldsRequest: GetPageMonthInsightsRequest = new GetPageMonthInsightsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID
    );

    it('Builds the config', () => {
        expect(request.config().params.metric).toEqual(
            [WeekAndMonthMetric.REACH, WeekAndMonthMetric.IMPRESSIONS].join(',')
        );
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/insights`);
        expect(request.config().params.period).toEqual(MetricPeriod.MONTH);
        expect(allFieldsRequest.config().params.metric).toEqual(Object.values(WeekAndMonthMetric).join(','));
    });
});
