import { MediaProductType, MediaTypeInResponses } from '../../Enums';
import { Children } from './Common';

/**
 * Interface to represent the data regarding a Media Object.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export interface MediaData {
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
     * The instagram id of the media object.
     */
    ig_id?: string;

    /**
     * Whether comments are enabled on the media object.
     */
    is_comment_enabled?: boolean;

    /**
     * The number of likes on the media object.
     */
    like_count?: number;

    /**
     * The type of the media object.
     */
    media_type?: MediaTypeInResponses;

    /**
     * The url of the media object.
     */
    media_url?: string;

    /**
     * The owner of the media object.
     */
    owner?: { id: string };

    /**
     * The permalink of the media object.
     */
    permalink?: string;

    /**
     * The shortcode of the media object.
     */
    shortcode?: string;

    /**
     * The thumbnail of the media object.
     */
    thumbnail_url?: string;

    /**
     * The timestamp of the media object in ISO 8601.
     */
    timestamp?: string;

    /**
     * The username of the media object.
     */
    username?: string;

    /**
     * Surface where the media is published.
     */
    media_product_type?: MediaProductType;

    /**
     * IGTV media title.
     */
    video_title?: string;
}
