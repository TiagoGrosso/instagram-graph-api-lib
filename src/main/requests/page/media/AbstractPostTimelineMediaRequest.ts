import { AbstractPostPageMediaRequest, MediaType } from './AbstractPostPageMediaRequest';

/**
 * An abstract request that creates a new Media container for media that goes to the timeline.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 3.0.0
 */
export abstract class AbstractPostPageTimelineMediaRequest extends AbstractPostPageMediaRequest {
    /**
     * The constructor
     *
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param caption the caption.
     * @param locationId the location id.
     */
    protected constructor(accessToken: string, pageId: string, caption?: string, locationId?: string) {
        super(accessToken, pageId);
        this.params.caption = caption;
        this.params.location_id = locationId;
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
     * Gets the media type of the object to create.
     *
     * @returns the media type.
     */
    protected abstract mediaType(): MediaType | undefined;
}
