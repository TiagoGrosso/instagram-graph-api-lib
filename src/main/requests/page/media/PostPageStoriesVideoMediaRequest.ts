import { AbstractPostPageStoriesMediaRequest } from './AbstractPostPageStoriesMediaRequest';

/**
 * A request that creates a new video media container for stories.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 */
export class PostPageStoriesVideoMediaRequest extends AbstractPostPageStoriesMediaRequest {
    constructor(accessToken: string, pageId: string, videoUrl: string) {
        super(accessToken, pageId);
        this.params.video_url = videoUrl;
    }
}
