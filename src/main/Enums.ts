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
 * Media info fields.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export enum MediaField {
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
     * The Instagram id of the media object.
     */
    IG_ID = 'ig_id',

    /**
     * Whether comments are enabled on the media object.
     */
    IS_COMMENT_ENABLED = 'is_comment_enabled',

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
     * The shortcode of the media object.
     */
    SHORTCODE = 'shortcode',

    /**
     * The URL of thumbnail of the media object.
     */
    THUMBNAIL_URL = 'thumbnail_url',

    /**
     * The ISO 8601 formatted creation date in UTC (default is UTC ±00:00)
     */
    TIMESTAMP = 'timestamp',

    /**
     * The username of the media object owner.
     */
    USERNAME = 'username',
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
 * Media fields that can be retrieved on Get Hashtag Media requests.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.5.0
 */
export enum HashtagMediaField {
    /**
     * The caption of the media object.
     */
    CAPTION = 'caption',

    /**
     * The children of the media object. Only returned for Album IG Media.
     */
    CHILDREN = 'children',

    /**
     * The number of comments on the media object.
     */
    COMMENTS_COUNT = 'comments_count',

    /**
     * The id of the media object.
     */
    ID = 'id',

    /**
     * The number of likes on the media object.
     */
    LIKE_COUNT = 'like_count',

    /**
     * The type of media object.
     */
    MEDIA_TYPE = 'media_type',

    /**
     * The url of the media object. Not returned for Album IG Media
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
