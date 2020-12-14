import { DayMetric, LifetimeMetric, MetricPeriod, WeekAndMonthMetric } from '../../main/Enums';
import { AbstractPageInsightsRequestConfigBuilder } from '../../main/requestConfigs/page/insights/AbstractPageInsightsRequestConfigBuilder';
import { PageInsightsDayRequestConfigBuilder } from '../../main/requestConfigs/page/insights/PageInsightsDayRequestConfigBuilder';
import { PageInsightsLifetimeRequestConfigBuilder } from '../../main/requestConfigs/page/insights/PageInsightsLifetimeRequestConfigBuilder';
import { PageInsightsMonthRequestConfigBuilder } from '../../main/requestConfigs/page/insights/PageInsightsMonthRequestConfigBuilder';
import { PageInsightsWeekRequestConfigBuilder } from '../../main/requestConfigs/page/insights/PageInsightsWeekRequestConfigBuilder';
import { RequestConfig } from '../../main/requestConfigs/RequestConfig';
import { TestConstants } from '../TestConstants';

describe('PageInsightsRequestConfigBuilders', () => {
    it('Creates a default request', () => {
        class PageInsightsRequestConfigBuilderImpl extends AbstractPageInsightsRequestConfigBuilder {
            public getPeriod(): MetricPeriod {
                return MetricPeriod.DAY;
            }
        }

        let requestConfig: RequestConfig = new PageInsightsRequestConfigBuilderImpl(
            TestConstants.ACCESS_TOKEN,
            TestConstants.PAGE_ID,
            [DayMetric.IMPRESSIONS]
        ).build();

        expect(requestConfig.params.metric).toEqual(DayMetric.IMPRESSIONS);
        expect(requestConfig.params.period).toEqual(MetricPeriod.DAY);
    });

    it('Builds a day metric request config', () => {
        let requestConfig: RequestConfig = new PageInsightsDayRequestConfigBuilder(
            TestConstants.ACCESS_TOKEN,
            TestConstants.PAGE_ID,
            [DayMetric.IMPRESSIONS]
        ).build();

        expect(requestConfig.params.metric).toEqual(DayMetric.IMPRESSIONS);
        expect(requestConfig.params.period).toEqual(MetricPeriod.DAY);
    });

    it('Builds a week metric request config', () => {
        let requestConfig: RequestConfig = new PageInsightsWeekRequestConfigBuilder(
            TestConstants.ACCESS_TOKEN,
            TestConstants.PAGE_ID,
            [WeekAndMonthMetric.IMPRESSIONS]
        ).build();

        expect(requestConfig.params.metric).toEqual(WeekAndMonthMetric.IMPRESSIONS);
        expect(requestConfig.params.period).toEqual(MetricPeriod.WEEK);
    });

    it('Builds a month metric request config', () => {
        let requestConfig: RequestConfig = new PageInsightsMonthRequestConfigBuilder(
            TestConstants.ACCESS_TOKEN,
            TestConstants.PAGE_ID,
            [WeekAndMonthMetric.IMPRESSIONS]
        ).build();

        expect(requestConfig.params.metric).toEqual(WeekAndMonthMetric.IMPRESSIONS);
        expect(requestConfig.params.period).toEqual(MetricPeriod.MONTH);
    });

    it('Builds a lifetime metric request config', () => {
        let requestConfig: RequestConfig = new PageInsightsLifetimeRequestConfigBuilder(
            TestConstants.ACCESS_TOKEN,
            TestConstants.PAGE_ID,
            [LifetimeMetric.AUDIENCE_CITY]
        ).build();

        expect(requestConfig.params.metric).toEqual(LifetimeMetric.AUDIENCE_CITY);
        expect(requestConfig.params.period).toEqual(MetricPeriod.LIFETIME);
    });
});
