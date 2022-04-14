import { AbstractPostPageMediaRequest, MediaType } from './AbstractPostPageMediaRequest';

/**
 * A request that creates a new Video Media container.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.1.0
 */
export class PostPageVideoMediaRequest extends AbstractPostPageMediaRequest {
    /**
     * The constructor
     *
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param videoUrl the video URL.
     * @param caption the caption.
     * @param locationId the location id.
     */
    constructor(
        accessToken: string,
        pageId: string,
        videoUrl: string,
        caption?: string,
        thumbOffset?: number,
        locationId?: string,
        isCarousel = false
    ) {
        super(accessToken, pageId, caption, locationId);
        this.params.video_url = videoUrl;
        this.params.thumb_offset = thumbOffset;
        this.params.is_carousel = isCarousel;
    }

    /**
     * Sets the thumbnail offset time in the request.
     *
     * @param thumbOffset the thumbnail offset time.
     *
     * @returns this object, for chained invocation.
     */
    public withThumbOffset(thumbOffset: number): this {
        this.params.thumb_offset = thumbOffset;
        return this;
    }

    /**
     * Sets the is_carousel param in the request.
     *
     * @param userTags the is_carousel.
     *
     * @returns this object, for chained invocation.
     */
    public withIsCarousel(isCarousel: boolean): this {
        this.params.is_carousel = isCarousel;
        return this;
    }

    /**
     * @inheritdoc
     */
    protected mediaType(): MediaType | undefined {
        return MediaType.VIDEO;
    }
}
