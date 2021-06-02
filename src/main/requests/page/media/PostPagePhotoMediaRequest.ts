import { AxiosResponse } from 'axios';
import { AbstractRequest } from '../../AbstractRequest';
import { CreatedObjectIdResponse } from '../../common/CreatedObjectIdResponse';
import { UserTag } from '../../Params';
import { Method } from '../../RequestConfig';

/**
 * A request that creates a new Photo Media container.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.1.0
 */
export class PostPagePhotoMediaRequest extends AbstractRequest<CreatedObjectIdResponse> {
    /**
     * The page id.
     */
    private pageId: string;

    /**
     * The constructor
     *
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param imageUrl the image URL.
     * @param caption the caption.
     * @param locationId the location id.
     * @param userTags the user_tags.
     */
    constructor(
        accessToken: string,
        pageId: string,
        imageUrl: string,
        caption?: string,
        locationId?: string,
        userTags?: UserTag[]
    ) {
        super(accessToken);
        this.pageId = pageId;
        this.params.image_url = imageUrl;
        this.params.caption = caption;
        this.params.location_id = locationId;
        this.params.user_tags = userTags;
    }

    /**
     * Sets the caption in the request.
     *
     * @param caption the caption.
     *
     * @returns this object, for chained invocation.
     */
    public withCaption(caption: string): PostPagePhotoMediaRequest {
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
    public withLocationId(locationId: string): PostPagePhotoMediaRequest {
        this.params.location_id = locationId;
        return this;
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
