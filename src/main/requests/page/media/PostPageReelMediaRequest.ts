import { AbstractPostPageMediaRequest, MediaType } from './AbstractPostPageMediaRequest';

/**
 * * A request that creates a new Reels Media container.
 *  *
 *  * @author Tiago Grosso <tiagogrosso99@gmail.com>
 *  * @since 5.0.0
 *  */
export class PostPageReelMediaRequest extends AbstractPostPageMediaRequest {
    /**
     * The constructor
     *
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param videoUrl the video URL.
     * @param caption the caption.
     * @param thumbOffset the thumbnail offset.
     * @param shareToFeed whether the reel should be shared in the feed as well.
     * @param locationId the location id.
     */
    constructor(
        accessToken: string,
        pageId: string,
        videoUrl: string,
        caption?: string,
        thumbOffset?: number,
        shareToFeed?: boolean,
        locationId?: string
    ) {
        super(accessToken, pageId, caption, locationId);
        this.params.video_url = videoUrl;
        this.params.thumb_offset = thumbOffset;
        this.params.share_to_feed = shareToFeed;
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
     * Sets whether the reel should be shared in the feed as well.
     *
     * @param shareToFeed whether the reel should be shared in the feed as well.
     *
     * @returns this object, for chained invocation.
     */
    public withShareToFeed(shareToFeed: boolean): this {
        this.params.share_to_feed = shareToFeed;
        return this;
    }

    /**
     * @inheritdoc
     */
    protected mediaType(): MediaType | undefined {
        return MediaType.REEL;
    }
}
