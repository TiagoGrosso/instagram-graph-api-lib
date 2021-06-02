import { AxiosResponse } from 'axios';
import { AbstractRequest } from '../../AbstractRequest';
import { CreatedObjectIdResponse } from '../../common/CreatedObjectIdResponse';
import { Method } from '../../RequestConfig';

/**
 * A request that creates a new Video Media container.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export class PostPageVideoMediaRequest extends AbstractRequest<CreatedObjectIdResponse> {
    /**
     * The page id.
     */
    private pageId: string;

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
        locationId?: string
    ) {
        super(accessToken);
        this.pageId = pageId;
        this.params.video_url = videoUrl;
        this.params.caption = caption;
        this.params.thumb_offset = thumbOffset;
        this.params.location_id = locationId;
        this.params.media_type = 'video';
    }

    /**
     * Sets the caption in the request.
     *
     * @param caption the caption.
     *
     * @returns this object, for chained invocation.
     */
    public withCaption(caption: string): PostPageVideoMediaRequest {
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
    public withLocationId(locationId: string): PostPageVideoMediaRequest {
        this.params.location_id = locationId;
        return this;
    }

    /**
     * Sets the thumbnail offset time in the request.
     *
     * @param thumbOffset the thumbnail offset time.
     *
     * @returns this object, for chained invocation.
     */
    public withThumbOffset(thumbOffset: number): PostPageVideoMediaRequest {
        this.params.thumb_offset = thumbOffset;
        return this;
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<{ id: string }>): CreatedObjectIdResponse {
        return new CreatedObjectIdResponse(response.data);
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
}
