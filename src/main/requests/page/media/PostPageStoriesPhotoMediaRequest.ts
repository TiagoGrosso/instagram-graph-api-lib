import { AbstractPostPageStoriesMediaRequest } from './AbstractPostPageStoriesMediaRequest';

/**
 * A request that creates a new photo media container for stories.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 */
export class PostPageStoriesPhotoMediaRequest extends AbstractPostPageStoriesMediaRequest {
    constructor(accessToken: string, pageId: string, imageUrl: string) {
        super(accessToken, pageId);
        this.params.image_url = imageUrl;
    }
}
