import { Client } from '../main/Client';
import {
    DayMetric,
    HashtagMediaField,
    LifetimeMetric,
    MediaField,
    PageField,
    SimplePostMetric,
    StoryMetric,
    WeekAndMonthMetric,
} from '../main/Enums';
import { GetHashtagRecentMediaRequest } from '../main/requests/hashtag/media/GetHashtagRecentMediaRequest';
import { GetHashtagTopMediaRequest } from '../main/requests/hashtag/media/GetHashtagTopMediaRequest';
import { GetHashtagIdRequest } from '../main/requests/hashtag/search/GetHashtagIdRequest';
import { GetMediaChildrenRequest } from '../main/requests/media/children/GetMediaChildrenRequest';
import { GetMediaCommentsRequest } from '../main/requests/media/comments/GetMediaCommentsRequest';
import { PostMediaCommentRequest } from '../main/requests/media/comments/PostMediaCommentRequest';
import { GetMediaInfoRequest } from '../main/requests/media/info/GetMediaInfoRequest';
import { GetSimplePostMediaInsightsRequest } from '../main/requests/media/insights/GetSimplePostMediaInsightsRequest';
import { GetStoryMediaInsightsRequest } from '../main/requests/media/insights/GetStoryMediaInsightsRequest';
import { GetPageInfoRequest } from '../main/requests/page/info/GetPageInfoRequest';
import { GetPageDayInsightsRequest } from '../main/requests/page/insights/GetPageDayInsightsRequest';
import { GetPageLifetimeInsightsRequest } from '../main/requests/page/insights/GetPageLifetimeInsightsRequest';
import { GetPageMonthInsightsRequest } from '../main/requests/page/insights/GetPageMonthInsightsRequest';
import { GetPageWeekInsightsRequest } from '../main/requests/page/insights/GetPageWeekInsightsRequest';
import { GetPageMediaRequest } from '../main/requests/page/media/GetPageMediaRequest';
import { TestConstants } from './TestConstants';

describe('Client', () => {
    const client: Client = new Client(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID);

    it('Gets the access token', () => {
        expect(client.getAccessToken()).toEqual(TestConstants.ACCESS_TOKEN);
    });

    it('Gets the page id', () => {
        expect(client.getPageId()).toEqual(TestConstants.PAGE_ID);
    });

    it('Builds a GetPageInfoRequest', () => {
        expect(client.newGetPageInfoRequest()).toEqual(
            new GetPageInfoRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID)
        );
        expect(client.newGetPageInfoRequest(PageField.BIOGRAPHY, PageField.FOLLOWS_COUNT)).toEqual(
            new GetPageInfoRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                PageField.BIOGRAPHY,
                PageField.FOLLOWS_COUNT
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

    it('Builds a GetMediaChildrenRequest', () => {
        expect(client.newGetMediaChildrenRequest(TestConstants.MEDIA_ID)).toEqual(
            new GetMediaChildrenRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID)
        );
    });

    it('Builds a GetMediaCommentsRequests', () => {
        expect(client.newGetMediaCommentsRequest(TestConstants.MEDIA_ID)).toEqual(
            new GetMediaCommentsRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID)
        );
    });

    it('Builds a PostMediaCommentRequest', () => {
        expect(client.newPostMediaCommentRequest(TestConstants.MEDIA_ID, TestConstants.COMMENTS_DATA[0].text)).toEqual(
            new PostMediaCommentRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.MEDIA_ID,
                TestConstants.COMMENTS_DATA[0].text
            )
        );
    });

    it('Builds a GetSimplePostMediaInsightsRequest', () => {
        expect(client.newGetSimplePostMediaInsightsRequest(TestConstants.MEDIA_ID)).toEqual(
            new GetSimplePostMediaInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID)
        );
        expect(
            client.newGetSimplePostMediaInsightsRequest(
                TestConstants.MEDIA_ID,
                SimplePostMetric.REACH,
                SimplePostMetric.ENGAGEMENT
            )
        ).toEqual(
            new GetSimplePostMediaInsightsRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.MEDIA_ID,
                SimplePostMetric.REACH,
                SimplePostMetric.ENGAGEMENT
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

    it('Builds a GetHashtagIdRequest', () => {
        expect(client.newGetHashtagIdRequest(TestConstants.HASHTAG)).toEqual(
            new GetHashtagIdRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID, TestConstants.HASHTAG)
        );
        expect(client.newGetHashtagIdRequest(TestConstants.HASHTAG, TestConstants.PAGE_ID_2)).toEqual(
            new GetHashtagIdRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID_2, TestConstants.HASHTAG)
        );
    });

    it('Builds a GetHashtagRecentMediaRequest', () => {
        expect(client.newGetHashtagRecentMediaRequest(TestConstants.HASHTAG_ID)).toEqual(
            new GetHashtagRecentMediaRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.HASHTAG_ID,
                TestConstants.PAGE_ID
            )
        );
        expect(
            client.newGetHashtagRecentMediaRequest(
                TestConstants.HASHTAG_ID,
                TestConstants.PAGE_ID_2,
                HashtagMediaField.CAPTION,
                HashtagMediaField.CHILDREN
            )
        ).toEqual(
            new GetHashtagRecentMediaRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.HASHTAG_ID,
                TestConstants.PAGE_ID_2,
                HashtagMediaField.CAPTION,
                HashtagMediaField.CHILDREN
            )
        );
    });

    it('Builds a GetHashtagTopMediaRequest', () => {
        expect(client.newGetHashtagTopMediaRequest(TestConstants.HASHTAG_ID)).toEqual(
            new GetHashtagTopMediaRequest(TestConstants.ACCESS_TOKEN, TestConstants.HASHTAG_ID, TestConstants.PAGE_ID)
        );
        expect(
            client.newGetHashtagTopMediaRequest(
                TestConstants.HASHTAG_ID,
                TestConstants.PAGE_ID_2,
                HashtagMediaField.CAPTION,
                HashtagMediaField.CHILDREN
            )
        ).toEqual(
            new GetHashtagTopMediaRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.HASHTAG_ID,
                TestConstants.PAGE_ID_2,
                HashtagMediaField.CAPTION,
                HashtagMediaField.CHILDREN
            )
        );
    });
});
