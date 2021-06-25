import { AbstractResponse } from '../../AbstractResponse';
import { Config, ContentPublishingLimitData } from '../../data/ContentPublishingLimitData';

/**
 * Represents a response to a content publishing limit request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export class GetContentPublishingLimitResponse extends AbstractResponse<ContentPublishingLimitData> {
    /**
     * Gets the content publishing limit config.
     *
     * @returns the content publishing limit config.
     */
    public getConfig(): Config | undefined {
        return this.getData().config;
    }

    /**
     * Gets the content publishing limit quota total.
     *
     * @returns the content publishing limit quota total.
     */
    public getQuotaTotal(): number | undefined {
        return this.getData().config?.quota_total;
    }

    /**
     * Gets the content publishing limit quota duration.
     *
     * @returns the content publishing limit quota duration.
     */
    public getQuotaDuration(): number | undefined {
        return this.getData().config?.quota_duration;
    }

    /**
     * Gets the content publishing limit quota usage.
     *
     * @returns the content publishing limit quota usage.
     */
    public getQuotaUsage(): number {
        return this.getData().quota_usage;
    }
}
