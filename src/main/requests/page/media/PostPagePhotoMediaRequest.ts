import { UserTag } from '../../Params';
import { MediaType } from './AbstractPostPageMediaRequest';
import { AbstractPostPageTimelineMediaRequest } from './AbstractPostTimelineMediaRequest';

/**
 * A request that creates a new Photo Media container.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.1.0
 */
export class PostPagePhotoMediaRequest extends AbstractPostPageTimelineMediaRequest {
    /**
     * The constructor
     *
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param imageUrl the image URL.
     * @param caption the caption.
     * @param locationId the location id.
     * @param userTags the user_tags.
     * @param isCarousel whether the media is a carousel.
     */
    constructor(
        accessToken: string,
        pageId: string,
        imageUrl: string,
        caption?: string,
        locationId?: string,
        userTags?: UserTag[],
        isCarousel = false
    ) {
        super(accessToken, pageId, caption, locationId);
        this.params.image_url = imageUrl;
        this.params.user_tags = userTags;
        this.params.is_carousel = isCarousel;
    }

    /**
     * Sets the user_tags in the request.
     *
     * @param userTags the user_tags.
     *
     * @returns this object, for chained invocation.
     */
    public withUserTags(userTags: UserTag[]): PostPagePhotoMediaRequest {
        this.params.user_tags = userTags;
        return this;
    }

    /**
     * Sets the is_carousel param in the request.
     *
     * @param isCarousel whether the media is a carousel.
     *
     * @returns this object, for chained invocation.
     */
    public withIsCarousel(isCarousel: boolean): PostPagePhotoMediaRequest {
        this.params.is_carousel = isCarousel;
        return this;
    }

    /**
     * @inheritdoc
     */
    protected mediaType(): MediaType | undefined {
        return MediaType.IMAGE;
    }
}
