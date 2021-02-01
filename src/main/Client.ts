import {
    DayMetric,
    HashtagMediaField,
    LifetimeMetric,
    MediaField,
    PageField,
    SimplePostMetric,
    StoryMetric,
    WeekAndMonthMetric,
} from './Enums';
import { AbstractGetHashtagMediaRequest } from './requests/hashtag/media/AbstractGetHashtagMediaRequest';
import { GetHashtagRecentMediaRequest } from './requests/hashtag/media/GetHashtagRecentMediaRequest';
import { GetHashtagTopMediaRequest } from './requests/hashtag/media/GetHashtagTopMediaRequest';
import { GetHashtagIdRequest } from './requests/hashtag/search/GetHashtagIdRequest';
import { GetMediaCommentsRequest } from './requests/media/comments/GetMediaCommentsRequest';
import { PostMediaCommentRequest } from './requests/media/comments/PostMediaCommentRequest';
import { GetMediaInfoRequest } from './requests/media/info/GetMediaInfoRequest';
import { GetSimplePostMediaInsightsRequest } from './requests/media/insights/GetSimplePostMediaInsightsRequest';
import { GetStoryMediaInsightsRequest } from './requests/media/insights/GetStoryMediaInsightsRequest';
import { GetPageInfoRequest } from './requests/page/info/GetPageInfoRequest';
import { GetPageDayInsightsRequest } from './requests/page/insights/GetPageDayInsightsRequest';
import { GetPageLifetimeInsightsRequest } from './requests/page/insights/GetPageLifetimeInsightsRequest';
import { GetPageMonthInsightsRequest } from './requests/page/insights/GetPageMonthInsightsRequest';
import { GetPageWeekInsightsRequest } from './requests/page/insights/GetPageWeekInsightsRequest';
import { GetPageMediaRequest } from './requests/page/media/GetPageMediaRequest';

/**
 * A client that creating requests.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.2.0
 */
export class Client {
    /**
     * The API access token.
     */
    private accessToken: string;

    /**
     * The id of the page. This is used on page related requests so it should be the page for which the access token has permissions.
     */
    private pageId: string;

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param pageId The id of the page.
     */
    constructor(accessToken: string, pageId: string) {
        this.accessToken = accessToken;
        this.pageId = pageId;
    }

    /**
     * Gets the access token.
     *
     * @returns the access token.
     */
    public getAccessToken(): string {
        return this.accessToken;
    }

    /**
     * Gets the page id.
     *
     * @returns the page id.
     */
    public getPageId(): string {
        return this.pageId;
    }

    /**
     * Builds a new {@link GetPageInfoRequest}.
     *
     * @param fields the fields to retrieve from the API. If no field is specified, all are retrieved.
     *
     * @returns a new {@link GetPageInfoRequest}.
     */
    public newGetPageInfoRequest(...fields: PageField[]): GetPageInfoRequest {
        return new GetPageInfoRequest(this.accessToken, this.pageId, ...fields);
    }

    /**
     * Builds a new {@link GetPageMediaRequest}.
     *
     * @param fields the fields to retrieve from the API for each media object. If no field is specified, all are retrieved.
     *
     * @returns a new {@link GetPageMediaRequest}.
     */
    public newGetPageMediaRequest(...fields: MediaField[]): GetPageMediaRequest {
        return new GetPageMediaRequest(this.accessToken, this.pageId, ...fields);
    }

    /**
     * Builds a new {@link GetPageLifetimeInsightsRequest}.
     *
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     *
     * @returns a new {@link GetPageLifetimeInsightsRequest}.
     */
    public newGetPageLifetimeInsightsRequest(...metrics: LifetimeMetric[]): GetPageLifetimeInsightsRequest {
        return new GetPageLifetimeInsightsRequest(this.accessToken, this.pageId, ...metrics);
    }

    /**
     * Builds a new {@link GetPageDayInsightsRequest}.
     *
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     *
     * @returns a new {@link GetPageDayInsightsRequest}.
     */
    public newGetPageDayInsightsRequest(...metrics: DayMetric[]): GetPageDayInsightsRequest {
        return new GetPageDayInsightsRequest(this.accessToken, this.pageId, ...metrics);
    }

    /**
     * Builds a new {@link GetPageWeekInsightsRequest}.
     *
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     *
     * @returns a new {@link GetPageWeekInsightsRequest}.
     */
    public newGetPageWeekInsightsRequest(...metrics: WeekAndMonthMetric[]): GetPageWeekInsightsRequest {
        return new GetPageWeekInsightsRequest(this.accessToken, this.pageId, ...metrics);
    }

    /**
     * Builds a new {@link GetPageMonthInsightsRequest}.
     *
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     *
     * @returns a new {@link GetPageMonthInsightsRequest}.
     */
    public newGetPageMonthInsightsRequest(...metrics: WeekAndMonthMetric[]): GetPageMonthInsightsRequest {
        return new GetPageMonthInsightsRequest(this.accessToken, this.pageId, ...metrics);
    }

    /**
     * Builds a new {@link GetMediaInfoRequest}.
     *
     * @param mediaId the media object id.
     * @param fields the fields to retrieve from the API. If no field is specified, all are retrieved.
     *
     * @returns a new {@link GetMediaInfoRequest}.
     */
    public newGetMediaInfoRequest(mediaId: string, ...fields: MediaField[]): GetMediaInfoRequest {
        return new GetMediaInfoRequest(this.accessToken, mediaId, ...fields);
    }

    /**
     * Builds a new {@link GetMediaCommentsRequest}.
     *
     * @param mediaId the media object id.
     *
     * @returns a new {@link GetMediaCommentsRequest}.
     */
    public newGetMediaCommentsRequest(mediaId: string): GetMediaCommentsRequest {
        return new GetMediaCommentsRequest(this.accessToken, mediaId);
    }

    /**
     * Builds a new {@link PostMediaCommentRequest}.
     *
     * @param mediaId the media object id.
     * @param text the text of the comment,
     *
     * @returns a new {@link PostMediaCommentRequest}.
     */
    public newPostMediaCommentRequest(mediaId: string, text: string): PostMediaCommentRequest {
        return new PostMediaCommentRequest(this.accessToken, mediaId, text);
    }

    /**
     * Builds a new {@link GetPostMediaInsightsRequest}.
     *
     * @param mediaId the media object id (must be of type 'Photo' or 'Video').
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     *
     * @returns a new {@link GetPostMediaInsightsRequest}.
     */
    public newGetSimplePostMediaInsightsRequest(
        mediaId: string,
        ...metrics: SimplePostMetric[]
    ): GetSimplePostMediaInsightsRequest {
        return new GetSimplePostMediaInsightsRequest(this.accessToken, mediaId, ...metrics);
    }

    /**
     * Builds a new {@link GetPostMediaInsightsRequest}.
     *
     * @param mediaId the media object id (must be of type 'Story').
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     *
     * @returns a new {@link GetPostMediaInsightsRequest}.
     */
    public newGetStoryMediaInsightsRequest(mediaId: string, ...metrics: StoryMetric[]): GetStoryMediaInsightsRequest {
        return new GetStoryMediaInsightsRequest(this.accessToken, mediaId, ...metrics);
    }

    /**
     * Builds a new {@link GetHashtagIdRequest}.
     *
     * @param hashtag the hashtag.
     * @param userId (optional) the id of the user making the request. If omitted, the page id is used.
     *
     * @returns a new {@link GetHashtagIdRequest}.
     */
    public newGetHashtagIdRequest(hashtag: string, userId: string = this.pageId): GetHashtagIdRequest {
        return new GetHashtagIdRequest(this.accessToken, userId, hashtag);
    }

    /**
     * Builds a new {@link GetHashtagRecentMediaRequest}.
     *
     * @param hashtagId the hashtag id.
     * @param userId (optional) the id of the user making the request. If omitted, the page id is used.
     * @param fields the media fields to retrieve from the API. If no field is specified, all are retrieved.
     *
     * @returns a new {@link GetHashtagRecentMediaRequest}.
     */
    public newGetHashtagRecentMediaRequest(
        hashtagId: string,
        userId: string = this.pageId,
        ...fields: HashtagMediaField[]
    ): AbstractGetHashtagMediaRequest {
        return new GetHashtagRecentMediaRequest(this.accessToken, hashtagId, userId, ...fields);
    }

    /**
     * Builds a new {@link GetHashtagTopMediaRequest}.
     *
     * @param hashtagId the hashtag id.
     * @param userId (optional) the id of the user making the request. If omitted, the page id is used.
     * @param fields the media fields to retrieve from the API. If no field is specified, all are retrieved.
     *
     * @returns a new {@link GetHashtagTopMediaRequest}.
     */
    public newGetHashtagTopMediaRequest(
        hashtagId: string,
        userId: string = this.pageId,
        ...fields: HashtagMediaField[]
    ): AbstractGetHashtagMediaRequest {
        return new GetHashtagTopMediaRequest(this.accessToken, hashtagId, userId, ...fields);
    }
}
