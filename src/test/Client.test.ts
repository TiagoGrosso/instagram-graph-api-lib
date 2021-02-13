import { Client } from '../main/Client';
import {
    CommentField,
    DayMetric,
    LifetimeMetric,
    PageField,
    PrivateMediaField,
    PublicMediaField,
    SimplePostMetric,
    StoryMetric,
    WeekAndMonthMetric,
} from '../main/Enums';
import { DeleteCommentRequest } from '../main/requests/comment/DeleteCommentRequest';
import { GetCommentRequest } from '../main/requests/comment/GetCommentRequest';
import { PostHideCommentRequest } from '../main/requests/comment/PostHideCommentRequest';
import { GetRepliesRequest } from '../main/requests/comment/replies/GetRepliesRequest';
import { PostReplyRequest } from '../main/requests/comment/replies/PostReplyRequest';
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
import { GetTagsRequest } from '../main/requests/page/tags/GetTagsRequest';
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
        expect(client.newGetPageMediaRequest(PrivateMediaField.IS_COMMENT_ENABLED, PublicMediaField.OWNER)).toEqual(
            new GetPageMediaRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                PrivateMediaField.IS_COMMENT_ENABLED,
                PublicMediaField.OWNER
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
        expect(
            client.newGetMediaInfoRequest(TestConstants.MEDIA_ID, PublicMediaField.OWNER, PrivateMediaField.SHORTCODE)
        ).toEqual(
            new GetMediaInfoRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.MEDIA_ID,
                PublicMediaField.OWNER,
                PrivateMediaField.SHORTCODE
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
        expect(client.newPostMediaCommentRequest(TestConstants.MEDIA_ID, TestConstants.COMMENT_TEXT)).toEqual(
            new PostMediaCommentRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID, TestConstants.COMMENT_TEXT)
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
                PublicMediaField.CAPTION,
                PublicMediaField.CHILDREN
            )
        ).toEqual(
            new GetHashtagRecentMediaRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.HASHTAG_ID,
                TestConstants.PAGE_ID_2,
                PublicMediaField.CAPTION,
                PublicMediaField.CHILDREN
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
                PublicMediaField.CAPTION,
                PublicMediaField.CHILDREN
            )
        ).toEqual(
            new GetHashtagTopMediaRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.HASHTAG_ID,
                TestConstants.PAGE_ID_2,
                PublicMediaField.CAPTION,
                PublicMediaField.CHILDREN
            )
        );
    });

    it('Builds a GetCommentRequest', () => {
        expect(client.newGetCommentRequest(TestConstants.COMMENT_ID)).toEqual(
            new GetCommentRequest(TestConstants.ACCESS_TOKEN, TestConstants.COMMENT_ID)
        );
        expect(
            client.newGetCommentRequest(TestConstants.COMMENT_ID, CommentField.REPLIES, CommentField.TIMESTAMP)
        ).toEqual(
            new GetCommentRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.COMMENT_ID,
                CommentField.REPLIES,
                CommentField.TIMESTAMP
            )
        );
    });

    it('Builds a PostHideCommentRequest', () => {
        expect(client.newPostHideCommentRequest(TestConstants.COMMENT_ID)).toEqual(
            new PostHideCommentRequest(TestConstants.ACCESS_TOKEN, TestConstants.COMMENT_ID)
        );
        expect(client.newPostHideCommentRequest(TestConstants.COMMENT_ID, false)).toEqual(
            new PostHideCommentRequest(TestConstants.ACCESS_TOKEN, TestConstants.COMMENT_ID, false)
        );
    });

    it('Builds a DeleteCommentRequest', () => {
        expect(client.newDeleteCommentRequest(TestConstants.COMMENT_ID)).toEqual(
            new DeleteCommentRequest(TestConstants.ACCESS_TOKEN, TestConstants.COMMENT_ID)
        );
    });

    it('Builds a GetRepliesRequest', () => {
        expect(client.newGetRepliesRequest(TestConstants.COMMENT_ID)).toEqual(
            new GetRepliesRequest(TestConstants.ACCESS_TOKEN, TestConstants.COMMENT_ID)
        );
        expect(client.newGetRepliesRequest(TestConstants.COMMENT_ID, CommentField.TEXT, CommentField.USER)).toEqual(
            new GetRepliesRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.COMMENT_ID,
                CommentField.TEXT,
                CommentField.USER
            )
        );
    });

    it('Builds a PostReplyComment', () => {
        expect(client.newPostReplyRequest(TestConstants.COMMENT_ID, TestConstants.COMMENT_TEXT)).toEqual(
            new PostReplyRequest(TestConstants.ACCESS_TOKEN, TestConstants.COMMENT_ID, TestConstants.COMMENT_TEXT)
        );
    });

    it('Builds a GetTagsRequest', () => {
        expect(client.newGetTagsRequest()).toEqual(
            new GetTagsRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID)
        );
        expect(client.newGetTagsRequest(PublicMediaField.LIKE_COUNT, PublicMediaField.CAPTION)).toEqual(
            new GetTagsRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                PublicMediaField.LIKE_COUNT,
                PublicMediaField.CAPTION
            )
        );
    });
});
