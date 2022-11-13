/**
 * Page info fields.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export enum PageField {
    /**
     * The biography of the page.
     */
    BIOGRAPHY = 'biography',

    /**
     * The id of the page.
     */
    ID = 'id',

    /**
     * The instagram of the page.
     */
    IG_ID = 'ig_id',

    /**
     * The number of followers of the page.
     */
    FOLLOWERS_COUNT = 'followers_count',

    /**
     * The number of follows of the page.
     */
    FOLLOWS_COUNT = 'follows_count',

    /**
     * The number of media objects of the page.
     */
    MEDIA_COUNT = 'media_count',

    /**
     * The name of the page.
     */
    NAME = 'name',

    /**
     * The URL of the profile picture of the page.
     */
    PROFILE_PICTURE_URL = 'profile_picture_url',

    /**
     * The username of the page.
     */
    USERNAME = 'username',
}

/**
 * Page insights day metrics.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export enum DayMetric {
    /**
     * Total number of taps on the email link in the IG User's profile.
     */
    EMAIL_CONTACTS = 'email_contacts',

    /**
     * Total number of new followers each day within the specified range.
     */
    FOLLOWER_COUNT = 'follower_count',

    /**
     * Total number of taps on the directions link in the IG User's profile.
     */
    GET_DIRECTIONS_CLICKS = 'get_directions_clicks',

    /**
     * Total number of times the IG User's IG Media objects have been viewed.
     */
    IMPRESSIONS = 'impressions',

    /**
     * Total number of taps on the call link in the IG User's profile.
     */
    PHONE_CALL_CLICKS = 'phone_call_clicks',

    /**
     * Total number of users who have viewed the IG User's profile.
     */
    PROFILE_VIEWS = 'profile_views',

    /**
     * Total number of unique users who have viewed at least one of the IG User's IG Media.
     */
    REACH = 'reach',

    /**
     * Total number of taps on the text message link in the IG User's profile.
     */
    TEXT_MESSAGE_CLICKS = 'text_message_clicks',

    /**
     * Total number of taps on the website link in the IG User's profile.
     */
    WEBSITE_CLICKS = 'website_clicks',
}

/**
 * Page insights week and month metrics.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export enum WeekAndMonthMetric {
    /**
     * Total number of times the IG User's IG Media objects have been viewed.
     */
    IMPRESSIONS = 'impressions',

    /**
     * Total number of unique users who have viewed at least one of the IG User's IG Media.
     */
    REACH = 'reach',
}

/**
 * Page insights lifetime metrics.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export enum LifetimeMetric {
    /**
     * The cities of the IG User's followers
     */
    AUDIENCE_CITY = 'audience_city',

    /**
     * The country of the IG User's followers
     */
    AUDIENCE_COUNTRY = 'audience_country',

    /**
     * The gender and age distribution of the IG User's followers.
     */
    AUDIENCE_GENDER_AGE = 'audience_gender_age',

    /**
     * The locales by country codes of the IG User's followers
     */
    AUDIENCE_LOCALE = 'audience_locale',

    /**
     * Total number of the IG User's followers who were online during the specified range.
     */
    ONLINE_FOLLOWERS = 'online_followers',
}

/**
 * Page insights metric periods.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export enum MetricPeriod {
    DAY = 'day',
    WEEK = 'week',
    MONTH = 'days_28',
    LIFETIME = 'lifetime',
}

/**
 * Public Media info fields.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.0.0
 */
export enum PublicMediaField {
    /**
     * The caption of the media.
     */
    CAPTION = 'caption',

    /**
     * The number of comments on the media object.
     */
    COMMENTS_COUNT = 'comments_count',

    /**
     * The id of the media object.
     */
    ID = 'id',

    /**
     * The children of the media object. Only returned for Album IG Media.
     */
    CHILDREN = 'children',

    /**
     * The number of likes on the media object.
     */
    LIKE_COUNT = 'like_count',

    /**
     * The type of media object.
     */
    MEDIA_TYPE = 'media_type',

    /**
     * The URL of the media object.
     */
    MEDIA_URL = 'media_url',

    /**
     * The owner of the media object.
     */
    OWNER = 'owner',

    /**
     * The permalink of the media object.
     */
    PERMALINK = 'permalink',

    /**
     * The ISO 8601 formatted creation date in UTC (default is UTC ±00:00)
     */
    TIMESTAMP = 'timestamp',

    /**
     * The username of the media object owner.
     */
    USERNAME = 'username',

    /**
     * Surface where the media is published. Can be AD, FEED, IGTV, or STORY.
     */
    MEDIA_PRODUCT_TYPE = 'media_product_type',

    /**
     * IGTV media title.
     */
    VIDEO_TITLE = 'video_title',
}

/**
 * Private Media info fields.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.0.0
 */
export enum PrivateMediaField {
    /**
     * The Instagram id of the media object.
     */
    IG_ID = 'ig_id',

    /**
     * Whether comments are enabled on the media object.
     */
    IS_COMMENT_ENABLED = 'is_comment_enabled',

    /**
     * The shortcode of the media object.
     */
    SHORTCODE = 'shortcode',

    /**
     * The URL of thumbnail of the media object.
     */
    THUMBNAIL_URL = 'thumbnail_url',
}

/**
 * Hashtag Media info fields.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 3.0.0
 */
export enum HashtagMediaField {
    /**
     * The caption of the media.
     */
    CAPTION = 'caption',

    /**
     * The number of comments on the media object.
     */
    COMMENTS_COUNT = 'comments_count',

    /**
     * The id of the media object.
     */
    ID = 'id',

    /**
     * The children of the media object. Only returned for Album IG Media.
     */
    CHILDREN = 'children',

    /**
     * The number of likes on the media object.
     */
    LIKE_COUNT = 'like_count',

    /**
     * The type of media object.
     */
    MEDIA_TYPE = 'media_type',

    /**
     * The URL of the media object.
     */
    MEDIA_URL = 'media_url',

    /**
     * The permalink of the media object.
     */
    PERMALINK = 'permalink',

    /**
     * The ISO 8601 formatted creation date in UTC (default is UTC ±00:00)
     */
    TIMESTAMP = 'timestamp',
}

export type MediaField = PrivateMediaField | PublicMediaField | HashtagMediaField;

/**
 * The surfaces where media can bne published.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.4.0
 */
export enum MediaProductType {
    AD = 'AD',
    FEED = 'FEED',
    IGTV = 'IGTV',
    STORY = 'STORY',
    REEL = 'REELS',
}

/**
 * Post insights metrics.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export enum SimplePostMetric {
    /**
     * Total number of likes and IG Comments on the IG Media object.
     */
    ENGAGEMENT = 'engagement',

    /**
     * Total number of times the IG Media object has been seen.
     */
    IMPRESSIONS = 'impressions',

    /**
     * Total number of unique Instagram accounts that have seen the IG Media object.
     */
    REACH = 'reach',

    /**
     * Total number of unique Instagram accounts that have saved the IG Media object.
     */
    SAVED = 'saved',
}

/**
 * Story insights metrics.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export enum StoryMetric {
    /**
     * Number of times someone exited the story IG Media object.
     */
    EXITS = 'exits',

    /**
     * Total number of times the story IG Media object has been seen.
     */
    IMPRESSIONS = 'impressions',

    /**
     * Total number of unique Instagram accounts that have seen the story IG Media object.
     */
    REACH = 'reach',

    /**
     * Total number of replies (IG Comments) on the story IG Media object.
     */
    REPLIES = 'replies',

    /**
     * Total number of taps to see this story IG Media object's next photo or video.
     */
    TAPS_FORWARD = 'taps_forward',

    /**
     * Total number of taps to see this story IG Media object's previous photo or video.
     */
    TAPS_BACK = 'taps_back',
}

/**
 * Album insights metrics.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.2.0
 */
export enum AlbumMetric {
    /**
     * Number of times someone exited the story IG Media object.
     */
    CAROUSEL_ALBUM_ENGAGEMENT = 'carousel_album_engagement',

    /**
     * Total number of times the story IG Media object has been seen.
     */
    CAROUSEL_ALBUM_IMPRESSIONS = 'carousel_album_impressions',

    /**
     * Total number of unique Instagram accounts that have seen the album IG Media object.
     */
    CAROUSEL_ALBUM_REACH = 'carousel_album_reach',

    /**
     * Total number of unique Instagram accounts that have saved the album IG Media object.
     */
    CAROUSEL_ALBUM_SAVED = 'carousel_album_saved',

    /**
     * (Video IG Media objects only) Always returns 0. Use carousel_album_reach and carousel_album_impressions instead.
     */
    CAROUSEL_ALBUM_VIDEO_VIEWS = 'carousel_album_video_views',
}

/**
 * Page options.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export enum PageOption {
    BEFORE = 'before',
    AFTER = 'after',
}

/**
 * Comment fields that can be retrieved on Get Comment requests.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.5.1
 */
export enum CommentField {
    /**
     * Whether the comment is hidden.
     */
    HIDDEN = 'hidden',

    /**
     * The id of the comment.
     */
    ID = 'id',

    /**
     * The number of likes on the comment.
     */
    LIKE_COUNT = 'like_count',

    /**
     * The media object that contains the comment.
     */
    MEDIA = 'media',

    /**
     * The number of replies on the comment.
     */
    REPLIES = 'replies',

    /**
     * The text of the comment.
     */
    TEXT = 'text',

    /**
     * The timestamp of the comment.
     */
    TIMESTAMP = 'timestamp',

    /**
     * The user that made the comment. Only returned if the user making the query also owns the comment, otherwise, the username field will be included
     */
    USER = 'user',

    /**
     * The username of the user who made the comment.
     */
    USERNAME = 'username',
}

/**
 * Container fields that can be retrieved through Get Container requests.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.1.0
 */
export enum ContainerField {
    /**
     * The id of the container.
     */
    ID = 'id',

    /**
     * Publishing status. If status_code is ERROR, this value will be an error sub code.
     */
    STATUS = 'status',

    /**
     * The container's publishing status.
     */
    STATUS_CODE = 'status_code',
}

/**
 * Fields that can be retrieved through Get Content Publishing Limit Requests.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.6.0
 */
export enum ContentPublishingLimitFields {
    /**
     * The Content Publishing Limit config.
     */
    CONFIG = 'config',

    /**
     * The quota usage.
     */
    QUOTA_USAGE = 'quota_usage',
}

/**
 * API Versions that can be used.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.7.0
 */
export enum ApiVersion {
    /**
     * {@link https://developers.facebook.com/docs/graph-api/changelog/version8.0}
     */
    V8_0 = 'v8.0',

    /**
     * {@link https://developers.facebook.com/docs/graph-api/changelog/version9.0}
     */
    V9_0 = 'v9.0',

    /**
     * {@link https://developers.facebook.com/docs/graph-api/changelog/version10.0}
     */
    V10_0 = 'v10.0',

    /**
     * {@link https://developers.facebook.com/docs/graph-api/changelog/version11.0}
     */
    V11_0 = 'v11.0',

    /**
     * {@link https://developers.facebook.com/docs/graph-api/changelog/version12.0}
     */
    V12_0 = 'v12.0',

    /**
     * {@link https://developers.facebook.com/docs/graph-api/changelog/version13.0}
     */
    V13_0 = 'v13.0',

    /**
     * {@link https://developers.facebook.com/docs/graph-api/changelog/version14.0}
     */
    V14_0 = 'v14.0',

    /**
     * {@link https://developers.facebook.com/docs/graph-api/changelog/version15.0}
     */
    V15_0 = 'v15.0',

    /**
     * The latest API Version available.
     */
    LATEST = V15_0,
}

/**
 * The media type.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 5.0.0
 */
export enum MediaTypeInResponses {
    IMAGE = 'IMAGE',

    /**
     * Applies to both normal videos and reels.
     */
    VIDEO = 'VIDEO',

    CAROUSEL = 'CAROUSEL_ALBUM',
}
