/**
 * Interface to represent a content publishing limit config.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export interface Config {
    /**
     * The quota total.
     */
    quota_total: number;

    /**
     * The quota duration.
     */
    quota_duration: number;
}

/**
 * Interface to represent data retrieved from a content publishing limit request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export interface ContentPublishingLimitData {
    /**
     * The content publishing limit config.
     */
    config?: Config;

    /**
     * The quota usage.
     */
    quota_usage: number;
}
