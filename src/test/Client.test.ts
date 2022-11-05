import { Client } from '../main/Client';
import {
    CommentField,
    ContainerField,
    ContentPublishingLimitFields,
    DayMetric,
    HashtagMediaField,
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
import { GetContainerRequest } from '../main/requests/container/GetContainerRequest';
import { GetHashtagRecentMediaRequest } from '../main/requests/hashtag/media/GetHashtagRecentMediaRequest';
import { GetHashtagTopMediaRequest } from '../main/requests/hashtag/media/GetHashtagTopMediaRequest';
import { GetHashtagIdRequest } from '../main/requests/hashtag/search/GetHashtagIdRequest';
import { GetMediaChildrenRequest } from '../main/requests/media/children/GetMediaChildrenRequest';
import { GetMediaCommentsRequest } from '../main/requests/media/comments/GetMediaCommentsRequest';
import { PostMediaCommentRequest } from '../main/requests/media/comments/PostMediaCommentRequest';
import { GetMediaInfoRequest } from '../main/requests/media/info/GetMediaInfoRequest';
import { GetSimplePostMediaInsightsRequest } from '../main/requests/media/insights/GetSimplePostMediaInsightsRequest';
import { GetStoryMediaInsightsRequest } from '../main/requests/media/insights/GetStoryMediaInsightsRequest';
import { GetContentPublishingLimitRequest } from '../main/requests/page/content_publishing_limit/GetContentPublishingLimitRequest';
import { GetPageInfoRequest } from '../main/requests/page/info/GetPageInfoRequest';
import { GetPageDayInsightsRequest } from '../main/requests/page/insights/GetPageDayInsightsRequest';
import { GetPageLifetimeInsightsRequest } from '../main/requests/page/insights/GetPageLifetimeInsightsRequest';
import { GetPageMonthInsightsRequest } from '../main/requests/page/insights/GetPageMonthInsightsRequest';
import { GetPageWeekInsightsRequest } from '../main/requests/page/insights/GetPageWeekInsightsRequest';
import { GetInstagramAccountInfoRequest } from '../main/requests/page/instagram_account_info/GetInstagramAccountInfoRequest';
import { GetPageMediaRequest } from '../main/requests/page/media/GetPageMediaRequest';
import { PostPageCarouselMediaRequest } from '../main/requests/page/media/PostPageCarouselMediaRequest';
import { PostPagePhotoMediaRequest } from '../main/requests/page/media/PostPagePhotoMediaRequest';
import { PostPageVideoMediaRequest } from '../main/requests/page/media/PostPageVideoMediaRequest';
import { PostPublishMediaRequest } from '../main/requests/page/media_publish/PostPublishMediaRequest';
import { GetPageRecentlySearchedHashtagsRequest } from '../main/requests/page/recently_searched_hashtags/GetPageRecentlySearchedHashtagsRequest';
import { GetPageStoriesRequest } from '../main/requests/page/stories/GetPageStoriesRequest';
import { GetTagsRequest } from '../main/requests/page/tags/GetTagsRequest';
import { TestConstants } from './TestConstants';

describe('Client', () => {
    const client: Client = new Client(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID);
    const clientExplicitVersion: Client = new Client(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        TestConstants.API_VERSION
    );

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
        expect(clientExplicitVersion.newGetPageInfoRequest()).toEqual(
            new GetPageInfoRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID).withApiVersion(
                TestConstants.API_VERSION
            )
        );
    });

    it('Builds a GetPageMediaRequest', () => {
        expect(client.newGetPageMediaRequest()).toEqual(
            new GetPageMediaRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID)
        );
        expect(clientExplicitVersion.newGetPageMediaRequest()).toEqual(
            new GetPageMediaRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID).withApiVersion(
                TestConstants.API_VERSION
            )
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
        expect(clientExplicitVersion.newGetPageLifetimeInsightsRequest()).toEqual(
            new GetPageLifetimeInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID).withApiVersion(
                TestConstants.API_VERSION
            )
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
        expect(clientExplicitVersion.newGetPageDayInsightsRequest()).toEqual(
            new GetPageDayInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID).withApiVersion(
                TestConstants.API_VERSION
            )
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
        expect(clientExplicitVersion.newGetPageWeekInsightsRequest()).toEqual(
            new GetPageWeekInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID).withApiVersion(
                TestConstants.API_VERSION
            )
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
        expect(clientExplicitVersion.newGetPageMonthInsightsRequest()).toEqual(
            new GetPageMonthInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID).withApiVersion(
                TestConstants.API_VERSION
            )
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
        expect(clientExplicitVersion.newGetMediaInfoRequest(TestConstants.MEDIA_ID)).toEqual(
            new GetMediaInfoRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID).withApiVersion(
                TestConstants.API_VERSION
            )
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
        expect(clientExplicitVersion.newGetMediaChildrenRequest(TestConstants.MEDIA_ID)).toEqual(
            new GetMediaChildrenRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID).withApiVersion(
                TestConstants.API_VERSION
            )
        );
    });

    it('Builds a GetMediaCommentsRequests', () => {
        expect(client.newGetMediaCommentsRequest(TestConstants.MEDIA_ID)).toEqual(
            new GetMediaCommentsRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID)
        );
        expect(clientExplicitVersion.newGetMediaCommentsRequest(TestConstants.MEDIA_ID)).toEqual(
            new GetMediaCommentsRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID).withApiVersion(
                TestConstants.API_VERSION
            )
        );
    });

    it('Builds a PostMediaCommentRequest', () => {
        expect(client.newPostMediaCommentRequest(TestConstants.MEDIA_ID, TestConstants.COMMENT_TEXT)).toEqual(
            new PostMediaCommentRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID, TestConstants.COMMENT_TEXT)
        );
        expect(
            clientExplicitVersion.newPostMediaCommentRequest(TestConstants.MEDIA_ID, TestConstants.COMMENT_TEXT)
        ).toEqual(
            new PostMediaCommentRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.MEDIA_ID,
                TestConstants.COMMENT_TEXT
            ).withApiVersion(TestConstants.API_VERSION)
        );
    });

    it('Builds a GetSimplePostMediaInsightsRequest', () => {
        expect(client.newGetSimplePostMediaInsightsRequest(TestConstants.MEDIA_ID)).toEqual(
            new GetSimplePostMediaInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID)
        );
        expect(clientExplicitVersion.newGetSimplePostMediaInsightsRequest(TestConstants.MEDIA_ID)).toEqual(
            new GetSimplePostMediaInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID).withApiVersion(
                TestConstants.API_VERSION
            )
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
        expect(clientExplicitVersion.newGetStoryMediaInsightsRequest(TestConstants.MEDIA_ID)).toEqual(
            new GetStoryMediaInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID).withApiVersion(
                TestConstants.API_VERSION
            )
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
        expect(clientExplicitVersion.newGetHashtagIdRequest(TestConstants.HASHTAG)).toEqual(
            new GetHashtagIdRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                TestConstants.HASHTAG
            ).withApiVersion(TestConstants.API_VERSION)
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
        expect(clientExplicitVersion.newGetHashtagTopMediaRequest(TestConstants.HASHTAG_ID)).toEqual(
            new GetHashtagTopMediaRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.HASHTAG_ID,
                TestConstants.PAGE_ID
            ).withApiVersion(TestConstants.API_VERSION)
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

    it('Builds a GetCommentRequest', () => {
        expect(client.newGetCommentRequest(TestConstants.COMMENT_ID)).toEqual(
            new GetCommentRequest(TestConstants.ACCESS_TOKEN, TestConstants.COMMENT_ID)
        );
        expect(clientExplicitVersion.newGetCommentRequest(TestConstants.COMMENT_ID)).toEqual(
            new GetCommentRequest(TestConstants.ACCESS_TOKEN, TestConstants.COMMENT_ID).withApiVersion(
                TestConstants.API_VERSION
            )
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
        expect(clientExplicitVersion.newPostHideCommentRequest(TestConstants.COMMENT_ID)).toEqual(
            new PostHideCommentRequest(TestConstants.ACCESS_TOKEN, TestConstants.COMMENT_ID).withApiVersion(
                TestConstants.API_VERSION
            )
        );
        expect(client.newPostHideCommentRequest(TestConstants.COMMENT_ID, false)).toEqual(
            new PostHideCommentRequest(TestConstants.ACCESS_TOKEN, TestConstants.COMMENT_ID, false)
        );
    });

    it('Builds a DeleteCommentRequest', () => {
        expect(client.newDeleteCommentRequest(TestConstants.COMMENT_ID)).toEqual(
            new DeleteCommentRequest(TestConstants.ACCESS_TOKEN, TestConstants.COMMENT_ID)
        );
        expect(clientExplicitVersion.newDeleteCommentRequest(TestConstants.COMMENT_ID)).toEqual(
            new DeleteCommentRequest(TestConstants.ACCESS_TOKEN, TestConstants.COMMENT_ID).withApiVersion(
                TestConstants.API_VERSION
            )
        );
    });

    it('Builds a GetRepliesRequest', () => {
        expect(client.newGetRepliesRequest(TestConstants.COMMENT_ID)).toEqual(
            new GetRepliesRequest(TestConstants.ACCESS_TOKEN, TestConstants.COMMENT_ID)
        );
        expect(clientExplicitVersion.newGetRepliesRequest(TestConstants.COMMENT_ID)).toEqual(
            new GetRepliesRequest(TestConstants.ACCESS_TOKEN, TestConstants.COMMENT_ID).withApiVersion(
                TestConstants.API_VERSION
            )
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
        expect(clientExplicitVersion.newPostReplyRequest(TestConstants.COMMENT_ID, TestConstants.COMMENT_TEXT)).toEqual(
            new PostReplyRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.COMMENT_ID,
                TestConstants.COMMENT_TEXT
            ).withApiVersion(TestConstants.API_VERSION)
        );
    });

    it('Builds a GetTagsRequest', () => {
        expect(client.newGetTagsRequest()).toEqual(
            new GetTagsRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID)
        );
        expect(clientExplicitVersion.newGetTagsRequest()).toEqual(
            new GetTagsRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID).withApiVersion(
                TestConstants.API_VERSION
            )
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

    it('Builds a GetContainerRquest', () => {
        expect(client.newGetContainerRequest(TestConstants.CONTAINER_ID)).toEqual(
            new GetContainerRequest(TestConstants.ACCESS_TOKEN, TestConstants.CONTAINER_ID)
        );
        expect(clientExplicitVersion.newGetContainerRequest(TestConstants.CONTAINER_ID)).toEqual(
            new GetContainerRequest(TestConstants.ACCESS_TOKEN, TestConstants.CONTAINER_ID).withApiVersion(
                TestConstants.API_VERSION
            )
        );
        expect(client.newGetContainerRequest(TestConstants.CONTAINER_ID, ...Object.values(ContainerField))).toEqual(
            new GetContainerRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.CONTAINER_ID,
                ...Object.values(ContainerField)
            )
        );
    });

    it('Builds a PostPagePhotoMediaRequest', () => {
        expect(client.newPostPagePhotoMediaRequest(TestConstants.MEDIA_URL)).toEqual(
            new PostPagePhotoMediaRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID, TestConstants.MEDIA_URL)
        );
        expect(clientExplicitVersion.newPostPagePhotoMediaRequest(TestConstants.MEDIA_URL)).toEqual(
            new PostPagePhotoMediaRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                TestConstants.MEDIA_URL
            ).withApiVersion(TestConstants.API_VERSION)
        );
        expect(
            client.newPostPagePhotoMediaRequest(
                TestConstants.MEDIA_URL,
                TestConstants.CAPTION,
                TestConstants.LOCATION_ID,
                [TestConstants.USER_TAG]
            )
        ).toEqual(
            new PostPagePhotoMediaRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                TestConstants.MEDIA_URL,
                TestConstants.CAPTION,
                TestConstants.LOCATION_ID,
                [TestConstants.USER_TAG]
            )
        );
    });

    it('Builds a PostPageVideoMediaRequest', () => {
        expect(client.newPostPageVideoMediaRequest(TestConstants.MEDIA_URL)).toEqual(
            new PostPageVideoMediaRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID, TestConstants.MEDIA_URL)
        );
        expect(clientExplicitVersion.newPostPageVideoMediaRequest(TestConstants.MEDIA_URL)).toEqual(
            new PostPageVideoMediaRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                TestConstants.MEDIA_URL
            ).withApiVersion(TestConstants.API_VERSION)
        );
        expect(
            client.newPostPageVideoMediaRequest(
                TestConstants.MEDIA_URL,
                TestConstants.CAPTION,
                TestConstants.THUMB_OFFSET,
                TestConstants.LOCATION_ID
            )
        ).toEqual(
            new PostPageVideoMediaRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                TestConstants.MEDIA_URL,
                TestConstants.CAPTION,
                TestConstants.THUMB_OFFSET,
                TestConstants.LOCATION_ID
            )
        );
    });

    it('Builds a PostPageCarouselMediaRequest', () => {
        expect(client.newPostPageCaroulselMediaRequest(TestConstants.ID_ARRAY)).toEqual(
            new PostPageCarouselMediaRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID, TestConstants.ID_ARRAY)
        );
        expect(clientExplicitVersion.newPostPageCaroulselMediaRequest()).toEqual(
            new PostPageCarouselMediaRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID).withApiVersion(
                TestConstants.API_VERSION
            )
        );
        expect(
            client.newPostPageCaroulselMediaRequest(
                TestConstants.ID_ARRAY,
                TestConstants.CAPTION,
                TestConstants.LOCATION_ID
            )
        ).toEqual(
            new PostPageCarouselMediaRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                TestConstants.ID_ARRAY,
                TestConstants.CAPTION,
                TestConstants.LOCATION_ID
            )
        );
    });

    it('Builds a PostPublishMediaRequest', () => {
        expect(client.newPostPublishMediaRequest(TestConstants.CONTAINER_ID)).toEqual(
            new PostPublishMediaRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID, TestConstants.CONTAINER_ID)
        );
        expect(clientExplicitVersion.newPostPublishMediaRequest(TestConstants.CONTAINER_ID)).toEqual(
            new PostPublishMediaRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                TestConstants.CONTAINER_ID
            ).withApiVersion(TestConstants.API_VERSION)
        );
    });

    it('Builds a GetPageStoriesRequest', () => {
        expect(client.newGetPageStoriesRequest()).toEqual(
            new GetPageStoriesRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID)
        );
        expect(clientExplicitVersion.newGetPageStoriesRequest()).toEqual(
            new GetPageStoriesRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID).withApiVersion(
                TestConstants.API_VERSION
            )
        );
    });

    it('Builds a GetPageRecentlySearchedHashtagsRequest', () => {
        expect(client.newGetPageRecentlySearchedHashtagsRequest()).toEqual(
            new GetPageRecentlySearchedHashtagsRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID)
        );
        expect(clientExplicitVersion.newGetPageRecentlySearchedHashtagsRequest()).toEqual(
            new GetPageRecentlySearchedHashtagsRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID
            ).withApiVersion(TestConstants.API_VERSION)
        );
    });

    it('Builds a GetContentPublishingLimitRequest', () => {
        expect(client.newGetContentPublishingLimitRequest()).toEqual(
            new GetContentPublishingLimitRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID)
        );
        expect(clientExplicitVersion.newGetContentPublishingLimitRequest()).toEqual(
            new GetContentPublishingLimitRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID).withApiVersion(
                TestConstants.API_VERSION
            )
        );
        expect(client.newGetContentPublishingLimitRequest(ContentPublishingLimitFields.QUOTA_USAGE)).toEqual(
            new GetContentPublishingLimitRequest(
                TestConstants.ACCESS_TOKEN,
                TestConstants.PAGE_ID,
                ContentPublishingLimitFields.QUOTA_USAGE
            )
        );
    });

    it('Builds a GetInstagramAccountInfoRequest', () => {
        expect(client.newGetInstagramAccountInfoRequest()).toEqual(
            new GetInstagramAccountInfoRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID)
        );
        expect(clientExplicitVersion.newGetInstagramAccountInfoRequest()).toEqual(
            new GetInstagramAccountInfoRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID).withApiVersion(
                TestConstants.API_VERSION
            )
        );
    });
});
