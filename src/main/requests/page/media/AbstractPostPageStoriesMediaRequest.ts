import { AbstractPostPageMediaRequest, MediaType } from './AbstractPostPageMediaRequest';

/**
 * An abstract request that creates a new Media container for media that goes to stories.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 */
export abstract class AbstractPostPageStoriesMediaRequest extends AbstractPostPageMediaRequest {
    /**
     * The constructor
     *
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param caption the caption.
     * @param locationId the location id.
     */
    protected constructor(accessToken: string, pageId: string) {
        super(accessToken, pageId);
    }

    /**
     * Gets the media type of the object to create.
     *
     * @returns the media type.
     */
    protected mediaType(): MediaType | undefined {
        return MediaType.STORIES;
    }
}
