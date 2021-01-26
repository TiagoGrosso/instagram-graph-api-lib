// ! Page Info

/*
 ? GET /{ig-user-id}
 ? ?fields={fields}
 ? &access_token={access-token}
*/

export enum UserField {
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

// ! Profile Insights

/*
 ? GET /{ig-user-id}/insights
 ? ?metric={metric}
 ? &period={period}
 ? &since={sinceTimestamp}
 ? &until={untilTimestamp}
 ? &access_token={access-token}
*/

export enum DayMetric {
    EMAIL_CONTACTS = 'email_contacts', // Total number of taps on the email link in the IG User's profile.
    FOLLOWER_COUNT = 'follower_count', // Total number of new followers each day within the specified range.
    GET_DIRECTIONS_CLICKS = 'get_directions_clicks', // Total number of taps on the directions link in the IG User's profile.
    IMPRESSIONS = 'impressions', // Total number of times the IG User's IG Media objects have been viewed.
    PHONE_CALL_CLICKS = 'phone_call_clicks', // Total number of taps on the call link in the IG User's profile.
    PROFILE_VIEWS = 'profile_views', // Total number of users who have viewed the IG User's profile.
    REACH = 'reach', // Total number of unique users who have viewed at least one of the IG User's IG Media.
    TEXT_MESSAGE_CLICKS = 'text_message_clicks', // Total number of taps on the text message link in the IG User's profile.
    WEBSITE_CLICKS = 'website_clicks', // Total number of taps on the website link in the IG User's profile.
}

export enum WeekAndMonthMetric {
    IMPRESSIONS = 'impressions', // Total number of times the IG User's IG Media objects have been viewed.
    REACH = 'reach', // Total number of unique users who have viewed at least one of the IG User's IG Media.
}

export enum LifetimeMetric {
    AUDIENCE_CITY = 'audience_city', // The cities of the IG User's followers
    AUDIENCE_COUNTRY = 'audience_country', // The country of the IG User's followers
    AUDIENCE_GENDER_AGE = 'audience_gender_age', // The gender and age distribution of the IG User's followers.
    AUDIENCE_LOCALE = 'audience_locale', // The locales by country codes of the IG User's followers
    ONLINE_FOLLOWERS = 'online_followers', // Total number of the IG User's followers who were online during the specified range.
}

export enum MetricPeriod {
    DAY = 'day',
    WEEK = 'week',
    MONTH = 'days_28',
    LIFETIME = 'lifetime',
}

// ! Media Info
/*
 ? GET /{ig-media-id}
 ? ?fields={fields}
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
    TIMESTAMP = 'timestamp', // ISO 8601 formatted creation date in UTC (default is UTC ±00:00)
    USERNAME = 'username',
}

// ! Media Insights

/*
 ? GET /{ig-media-id}/insights
 ? ?metric={metric}
 ? &access_token={access-token}
*/

export enum PostMetric {
    ENGAGEMENT = 'engagement', // Total number of likes and IG Comments on the IG Media object.
    IMPRESSIONS = 'impressions', // Total number of times the IG Media object has been seen.
    REACH = 'reach', // Total number of unique Instagram accounts that have seen the IG Media object.
    SAVED = 'saved', // Total number of unique Instagram accounts that have saved the IG Media object.
}

export enum StoryMetric {
    EXITS = 'exits', // Number of times someone exited the story IG Media object.
    IMPRESSIONS = 'impressions', // Total number of times the story IG Media object has been seen.
    REACH = 'reach', // Total number of unique Instagram accounts that have seen the story IG Media object.
    REPLIES = 'replies', // Total number of replies (IG Comments) on the story IG Media object.
    TAPS_FORWARD = 'taps_forward', // Total number of taps to see this story IG Media object's next photo or video.
    TAPS_BACK = 'taps_back', // Total number of taps to see this story IG Media object's previous photo or video.
}

// ! Other

export enum PageOption {
    BEFORE = 'before',
    AFTER = 'after',
}
