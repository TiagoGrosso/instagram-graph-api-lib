import { Client } from '../main/Client';
import {
    DayMetric,
    LifetimeMetric,
    MediaField,
    PostMetric,
    StoryMetric,
    UserField,
    WeekAndMonthMetric,
} from '../main/Enums';
import { GetMediaInfoRequest } from '../main/requests/media/info/GetMediaInfoRequest';
import { GetPostMediaInsightsRequest } from '../main/requests/media/insights/GetPostMediaInsightsRequest';
import { GetStoryMediaInsightsRequest } from '../main/requests/media/insights/GetStoryMediaInsightsRequest';
import { GetPageInfoRequest } from '../main/requests/page/info/GetPageInfoRequest';
import { GetPageDayInsightsRequest } from '../main/requests/page/insights/GetPageDayInsightsRequest';
import { GetPageLifetimeInsightsRequest } from '../main/requests/page/insights/GetPageLifetimeInsightsRequest';
import { GetPageMonthInsightsRequest } from '../main/requests/page/insights/GetPageMonthInsightsRequest';
import { GetPageWeekInsightsRequest } from '../main/requests/page/insights/GetPageWeekInsightsRequest';
import { GetPageMediaRequest } from '../main/requests/page/media/GetPageMediaRequest';
import { TestConstants } from './TestConstants';

describe('Client', () => {
    let client: Client = new Client(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID);

    it('Gets the access token', () => {
        expect(client.getAccessToken()).toEqual(TestConstants.ACCESS_TOKEN);
    });

    it('Gets the access token', () => {
        expect(client.getPageId()).toEqual(TestConstants.PAGE_ID);
    });

    it('Builds a GetPageInfoRequest', () => {
        expect(client.newGetPageInfoRequest()).toEqual(
            new GetPageInfoRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID)
        );
        expect(client.newGetPageInfoRequest(UserField.BIOGRAPHY, UserField.FOLLOWS_COUNT)).toEqual(
            new GetPageInfoRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                UserField.BIOGRAPHY,
                UserField.FOLLOWS_COUNT
            )
        );
    });

    it('Builds a GetPageMediaRequest', () => {
        expect(client.newGetPageMediaRequest()).toEqual(
            new GetPageMediaRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID)
        );
        expect(client.newGetPageMediaRequest(MediaField.IS_COMMENT_ENABLED, MediaField.OWNER)).toEqual(
            new GetPageMediaRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                MediaField.IS_COMMENT_ENABLED,
                MediaField.OWNER
            )
        );
    });

    it('Builds a GetPageLifetimeInsightsRequest', () => {
        expect(client.newGetPageLifetimeInsightsRequest()).toEqual(
            new GetPageLifetimeInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID)
        );
        expect(
            client.newGetPageLifetimeInsightsRequest(LifetimeMetric.AUDIENCE_LOCALE, LifetimeMetric.ONLINE_FOLLOWERS)
        ).toEqual(
            new GetPageLifetimeInsightsRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                LifetimeMetric.AUDIENCE_LOCALE,
                LifetimeMetric.ONLINE_FOLLOWERS
            )
        );
    });

    it('Builds a GetPageDayInsightsRequest', () => {
        expect(client.newGetPageDayInsightsRequest()).toEqual(
            new GetPageDayInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID)
        );
        expect(client.newGetPageDayInsightsRequest(DayMetric.IMPRESSIONS, DayMetric.GET_DIRECTIONS_CLICKS)).toEqual(
            new GetPageDayInsightsRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                DayMetric.IMPRESSIONS,
                DayMetric.GET_DIRECTIONS_CLICKS
            )
        );
    });

    it('Builds a GetPageWeekInsightsRequest', () => {
        expect(client.newGetPageWeekInsightsRequest()).toEqual(
            new GetPageWeekInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID)
        );
        expect(client.newGetPageWeekInsightsRequest(WeekAndMonthMetric.IMPRESSIONS, WeekAndMonthMetric.REACH)).toEqual(
            new GetPageWeekInsightsRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                WeekAndMonthMetric.IMPRESSIONS,
                WeekAndMonthMetric.REACH
            )
        );
    });

    it('Builds a GetPageWeekInsightsRequest', () => {
        expect(client.newGetPageMonthInsightsRequest()).toEqual(
            new GetPageMonthInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID)
        );
        expect(client.newGetPageMonthInsightsRequest(WeekAndMonthMetric.IMPRESSIONS, WeekAndMonthMetric.REACH)).toEqual(
            new GetPageMonthInsightsRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                WeekAndMonthMetric.IMPRESSIONS,
                WeekAndMonthMetric.REACH
            )
        );
    });

    it('Builds a GetMediaInfoRequest', () => {
        expect(client.newGetMediaInfoRequest(TestConstants.MEDIA_ID)).toEqual(
            new GetMediaInfoRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID)
        );
        expect(client.newGetMediaInfoRequest(TestConstants.MEDIA_ID, MediaField.OWNER, MediaField.PERMALINK)).toEqual(
            new GetMediaInfoRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.MEDIA_ID,
                MediaField.OWNER,
                MediaField.PERMALINK
            )
        );
    });

    it('Builds a GetPostMediaInsightsRequest', () => {
        expect(client.newGetPostMediaInsightsRequest(TestConstants.MEDIA_ID)).toEqual(
            new GetPostMediaInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID)
        );
        expect(
            client.newGetPostMediaInsightsRequest(TestConstants.MEDIA_ID, PostMetric.REACH, PostMetric.ENGAGEMENT)
        ).toEqual(
            new GetPostMediaInsightsRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.MEDIA_ID,
                PostMetric.REACH,
                PostMetric.ENGAGEMENT
            )
        );
    });

    it('Builds a GetStoryMediaInsightsRequest', () => {
        expect(client.newGetStoryMediaInsightsRequest(TestConstants.MEDIA_ID)).toEqual(
            new GetStoryMediaInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID)
        );
        expect(
            client.newGetStoryMediaInsightsRequest(TestConstants.MEDIA_ID, StoryMetric.REACH, StoryMetric.TAPS_FORWARD)
        ).toEqual(
            new GetStoryMediaInsightsRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.MEDIA_ID,
                StoryMetric.REACH,
                StoryMetric.TAPS_FORWARD
            )
        );
    });
});
