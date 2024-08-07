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
     */
    protected constructor(accessToken: string, pageId: string) {
        super(accessToken);
        this.pageId = pageId;
        this.params.media_type = this.mediaType();
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: { id: string }): CreatedObjectIdResponse {
        return new CreatedObjectIdResponse(response);
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
    IMAGE = 'IMAGE',

    CAROUSEL = 'CAROUSEL',

    REEL = 'REELS',

    STORIES = 'STORIES',
}
