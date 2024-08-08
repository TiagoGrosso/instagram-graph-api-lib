import { ContentPublishingLimitFields } from '../../../Enums';
import { AbstractRequest } from '../../AbstractRequest';
import { ContentPublishingLimitData } from '../../data/ContentPublishingLimitData';
import { GetContentPublishingLimitResponse } from './GetContentPublishingLimitResponse';

/**
 * A request that gets the content publishing limit of a page.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.6.0
 */
export class GetContentPublishingLimitRequest extends AbstractRequest<GetContentPublishingLimitResponse> {
    /**
     * The page id.
     */
    private readonly pageId: string;

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param fields the fields to retrieve.
     */
    constructor(accessToken: string, pageId: string, ...fields: ContentPublishingLimitFields[]) {
        super(accessToken);
        this.pageId = pageId;
        const fieldsSet: Set<string> =
            fields.length > 0 ? new Set(fields) : new Set(Object.values(ContentPublishingLimitFields));
        this.params.fields = Array.from(fieldsSet).join(',');
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: { data: ContentPublishingLimitData[] }): GetContentPublishingLimitResponse {
        return new GetContentPublishingLimitResponse(response.data[0]);
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.pageId}/content_publishing_limit`;
    }

    /**
     * @inheritdoc
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public addRange(_since: Date, _until: Date): void {
        throw new Error('For GetContentPublishingLimitRequest, use "since(date)" instead.');
    }

    /**
     * @inheritdoc
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public withRange(_since: Date, _until: Date): this {
        throw new Error('For GetContentPublishingLimitRequest, use "since(date)" instead.');
    }

    /**
     * Adds the `since` param to the request.
     *
     * @param date the date. Must be, at most, 1 day ago.
     *
     * @throws {DateOlderThanOneDay} if the date is not at most 1 day ago.
     *
     * @returns this request, for chained invocation.
     */
    public since(date: Date): this {
        const yesterday: Date = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (date < yesterday) {
            throw new DateOlderThanOneDay(date);
        }
        this.params.since = Math.floor(date.getTime() / 1000);
        return this;
    }
}

/**
 * An error class for invalid dates when querying the content publishing limit.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.6.0
 */
export class DateOlderThanOneDay extends Error {
    /**
     * The constructor.
     *
     * @param date the date.
     */
    constructor(date: Date) {
        super(`The provided date (${date}) is not valid. It has to be at most 1 day ago.`);
    }
}
