import { WeekAndMonthMetric, MetricPeriod } from '../../../../main/Enums';
import { PageInsightsWeekRequest } from '../../../../main/requests/page/insights/PageInsightsWeekRequest';
import { TestConstants } from '../../../TestConstants';

describe('PageInsightsWeekRequest', () => {
    let request: PageInsightsWeekRequest = new PageInsightsWeekRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        WeekAndMonthMetric.REACH,
        WeekAndMonthMetric.IMPRESSIONS
    );
    let allFieldsRequest: PageInsightsWeekRequest = new PageInsightsWeekRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID
    );

    it('Builds the config', () => {
        expect(request.config().params.metric).toEqual(
            [WeekAndMonthMetric.REACH, WeekAndMonthMetric.IMPRESSIONS].join(',')
        );
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/insights`);
        expect(request.config().params.period).toEqual(MetricPeriod.WEEK);
        expect(allFieldsRequest.config().params.metric).toEqual(Object.values(WeekAndMonthMetric).join(','));
    });
});
