/**
 * Page info fields.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export enum PageField {
    BIOGRAPHY = 'biography',
    ID = 'id',
    IG_ID = 'ig_id',
    FOLLOWERS_COUNT = 'followers_count',
    FOLLOWS_COUNT = 'follows_count',
    MEDIA_COUNT = 'media_count',
    NAME = 'name',
    PROFILE_PICTURE_URL = 'profile_picture_url',
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
    COMMENTS_COUNT = 'comments_count',
    ID = 'id',
    IG_ID = 'ig_id',
    IS_COMMENT_ENABLED = 'is_comment_enabled',
    LIKE_COUNT = 'like_count',
    MEDIA_TYPE = 'media_type',
    MEDIA_URL = 'media_url',
    OWNER = 'owner',
    PERMALINK = 'permalink',
    SHORTCODE = 'shortcode',
    THUMBNAIL_URL = 'thumbnail_url',

    /**
     * ISO 8601 formatted creation date in UTC (default is UTC ±00:00)
     */
    TIMESTAMP = 'timestamp',
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
 * @since `next.release`
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
