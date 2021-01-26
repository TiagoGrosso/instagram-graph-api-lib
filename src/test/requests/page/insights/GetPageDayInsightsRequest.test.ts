import { DayMetric, MetricPeriod } from '../../../../main/Enums';
import { GetPageDayInsightsRequest } from '../../../../main/requests/page/insights/GetPageDayInsightsRequest';
import { TestConstants } from '../../../TestConstants';

describe('GetPageInsightsDayRequest', () => {
    let request: GetPageDayInsightsRequest = new GetPageDayInsightsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        DayMetric.REACH,
        DayMetric.IMPRESSIONS
    );
    let allFieldsRequest: GetPageDayInsightsRequest = new GetPageDayInsightsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID
    );

    it('Builds the config', () => {
        expect(request.config().params.metric).toEqual([DayMetric.REACH, DayMetric.IMPRESSIONS].join(','));
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/insights`);
        expect(request.config().params.period).toEqual(MetricPeriod.DAY);
        expect(allFieldsRequest.config().params.metric).toEqual(Object.values(DayMetric).join(','));
    });
});
