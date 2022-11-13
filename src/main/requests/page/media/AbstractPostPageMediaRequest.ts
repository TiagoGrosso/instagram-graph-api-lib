import { AxiosResponse } from 'axios';
import { AbstractRequest } from '../../AbstractRequest';
import { CreatedObjectIdResponse } from '../../common/CreatedObjectIdResponse';
import { Method } from '../../RequestConfig';

/**
 * An abstract request that creates a new Media container.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 3.0.0
 */
export abstract class AbstractPostPageMediaRequest extends AbstractRequest<CreatedObjectIdResponse> {
    /**
     * The page id.
     */
    private readonly pageId: string;

    /**
     * The constructor
     *
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param caption the caption.
     * @param locationId the location id.
     */
    protected constructor(accessToken: string, pageId: string, caption?: string, locationId?: string) {
        super(accessToken);
        this.pageId = pageId;
        this.params.caption = caption;
        this.params.location_id = locationId;
        this.params.media_type = this.mediaType();
    }

    /**
     * Sets the caption in the request.
     *
     * @param caption the caption.
     *
     * @returns this object, for chained invocation.
     */
    public withCaption(caption: string): this {
        this.params.caption = caption;
        return this;
    }

    /**
     * Sets the location id in the request.
     *
     * @param locationId the location id.
     *
     * @returns this object, for chained invocation.
     */
    public withLocationId(locationId: string): this {
        this.params.location_id = locationId;
        return this;
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<{ id: string }>): CreatedObjectIdResponse {
        return new CreatedObjectIdResponse(response.data);
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.pageId}/media`;
    }

    /**
     * @inheritdoc
     */
    protected method(): Method {
        return 'POST';
    }

    /**
     * Gets the media type of the object to create.
     *
     * @returns the media type.
     */
    protected abstract mediaType(): MediaType | undefined;
}

/**
 * The media type.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 3.0.0
 */
export enum MediaType {
    VIDEO = 'VIDEO',

    CAROUSEL = 'CAROUSEL',

    REEL = 'REELS',
}
