import { Children } from './Common';

/**
 * Interface to represent the data regarding a Media Object retrieved through a Get Hashtag Media request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export interface HashtagMediaData {
    /**
     * The id of the media object.
     */
    id: string;

    /**
     * The children of the media object. Only returned for Album IG Media.
     */
    children?: Children;

    /**
     * The caption of the media object.
     */
    caption?: string;

    /**
     * The number of comments on the media object.
     */
    comments_count?: number;

    /**
     * The number of likes on the media object.
     */
    like_count?: number;

    /**
     * The type of the media object.
     */
    media_type?: string;

    /**
     * The url of the media object. Not returned for Album IG Media
     */
    media_url?: string;

    /**
     * The permalink of the media object.
     */
    permalink?: string;

    /**
     * The timestamp of the media object in ISO 8601.
     */
    timestamp?: string;
}
