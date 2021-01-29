import { PageOption, LifetimeMetric, MetricPeriod, WeekAndMonthMetric } from '../main/Enums';
import { ComplexMetricValue } from '../main/requests/data/insights/ComplexMetric';
import { BasicInsightsMetricData, MetricValue } from '../main/requests/data/insights/BasicInsightsMetricData';
import { MediaData } from '../main/requests/data/MediaData';
import { PagingData } from '../main/requests/data/Paging';
import { PageInfoData } from '../main/requests/data/PageInfoData';
import { MeData } from '../main/requests/data/MeData';

/**
 * A set of constants used in tests.
 *
 * @author Tiago Grosso (tiagogrosso99@gmail.com)
 * @since 0.1.0
 */
export class TestConstants {
    /**
     * A dummy path.
     */
    static readonly PATH: string = 'test_path';

    /**
     * A dummy path for media requests.
     */
    static readonly MEDIA_REQUEST_PATH: string = 'test_media_path';

    /**
     * A dummy access token.
     */
    static readonly ACCESS_TOKEN: string = 'test_token';

    /**
     * A dummy media id.
     */
    static readonly MEDIA_ID: string = 'media_id';

    /**
     * A dummy page id.
     */
    static readonly PAGE_ID: string = 'page_id';

    /**
     * A dummy limit.
     */
    static readonly LIMIT: number = 20;

    /**
     * A dummy since date.
     */
    static readonly SINCE: Date = new Date('2020-05-01T08:00:00+0000');

    /**
     * A dummy until date.
     */
    static readonly UNTIL: Date = new Date('2020-06-01T08:00:00+0000');

    /**
     * A dummy before page option.
     */
    static readonly BEFORE_PAGE: { option: PageOption; value: string } = {
        option: PageOption.BEFORE,
        value: 'test_before_token',
    };

    /**
     * A dummy after page option.
     */
    static readonly AFTER_PAGE: { option: PageOption; value: string } = {
        option: PageOption.AFTER,
        value: 'test_after_token',
    };

    /**
     * A dummy full media data object.
     */
    static readonly FULL_MEDIA_DATA: MediaData = {
        id: 'media_id',
        caption: 'media_caption',
        comments_count: 20,
        ig_id: 'media_ig_id',
        is_comment_enabled: false,
        like_count: 500,
        media_type: 'IMAGE',
        media_url: 'media_url',
        owner: { id: 'owner_id' },
        permalink: 'media_permalink',
        shortcode: 'media_shortcode',
        timestamp: '2020-07-01T08:00:00+0000',
        username: 'media_susername',
    };

    /**
     * A dummy partial media data object.
     */
    static readonly PARTIAL_MEDIA_DATA: MediaData = {
        id: 'media_id',
        is_comment_enabled: false,
        owner: { id: 'owner_id' },
    };

    /**
     * A dummy bare media data object.
     */
    static readonly BARE_MEDIA_DATA: MediaData = {
        id: 'media_id_2',
    };

    /**
     * A dummy paging object.
     */
    static readonly PAGING: PagingData = {
        previous: 'previous_token',
        next: 'next_token',
        cursors: {
            before: 'before_object',
            after: 'after_page',
        },
    };

    /**
     * A dummy paging object without cursors.
     */
    static readonly NO_CURSORS_PAGING: PagingData = {
        previous: 'previous_token',
        next: 'next_token',
    };

    /**
     * A dummy page info data object.
     */
    static readonly PAGE_INFO_DATA: PageInfoData = {
        id: 'page_id',
        ig_id: 'page_ig_id',
        biography: 'Page Biography',
        followers_count: 500,
        follows_count: 250,
        media_count: 10,
        name: 'Page Name',
        profile_picture_url: 'page_picture_url',
        username: 'page_username',
    };

    /**
     * A dummy me data object.
     */
    static readonly ME_DATA: MeData = {
        instagram_business_account: {
            id: 'page_ig_id',
        },
        id: 'page_id',
    };

    /**
     * A dummy lifetime metric data.
     */
    static readonly COMPLEX_METRIC_DATA: BasicInsightsMetricData<MetricValue<ComplexMetricValue>[]>[] = [
        {
            name: LifetimeMetric.AUDIENCE_COUNTRY,
            period: MetricPeriod.LIFETIME,
            title: 'Metric Title',
            description: 'Metric Description',
            id: 'metric_id',
            values: [
                {
                    value: {
                        Spain: 500,
                        Portugal: 100,
                        France: 1000,
                    },
                    end_time: '2020-08-01T08:00:00+0000',
                },
            ],
        },
        {
            name: LifetimeMetric.AUDIENCE_CITY,
            period: MetricPeriod.LIFETIME,
            title: 'Metric Title 2',
            description: 'Metric Description 2',
            id: 'metric_id_2',
            values: [
                {
                    value: {
                        'Lisbon, Portugal': 100,
                        'Madrid, Spain': 500,
                        'Paris, France': 1000,
                    },
                    end_time: '2020-09-01T08:00:00+0000',
                },
            ],
        },
    ];

    /**
     * A dummy lifetime metric data with an empty value.
     */
    static readonly EMPTY_COMPLEX_METRIC_DATA: BasicInsightsMetricData<MetricValue<ComplexMetricValue>[]>[] = [
        {
            name: LifetimeMetric.AUDIENCE_COUNTRY,
            period: MetricPeriod.LIFETIME,
            title: 'Metric Title',
            description: 'Metric Description',
            id: 'metric_id',
            values: [
                {
                    value: {},
                    end_time: '2020-09-01T08:00:00+0000',
                },
            ],
        },
    ];

    /**
     * A dummy simple values data.
     */
    static readonly SIMPLE_METRIC_VALUES: MetricValue<number>[] = [
        {
            value: 200,
            end_time: '2020-09-01T09:00:00+0000',
        },
        {
            value: 100,
            end_time: '2020-09-01T08:00:00+0000',
        },
        {
            value: 300,
            end_time: '2020-09-01T10:00:00+0000',
        },
    ];

    /**
     * A dummy lifetime metric data.
     */
    static readonly SIMPLE_METRIC_DATA: BasicInsightsMetricData<MetricValue<number>[]>[] = [
        {
            name: WeekAndMonthMetric.REACH,
            period: MetricPeriod.WEEK,
            title: 'Metric Title',
            description: 'Metric Description',
            id: 'metric_id',
            values: TestConstants.SIMPLE_METRIC_VALUES,
        },
        {
            name: WeekAndMonthMetric.IMPRESSIONS,
            period: MetricPeriod.WEEK,
            title: 'Metric Title 2',
            description: 'Metric Description 2',
            id: 'metric_id_2',
            values: [],
        },
    ];
}
