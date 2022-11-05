import { AxiosResponse } from 'axios';
import { AbstractRequest } from '../../AbstractRequest';
import { CreatedObjectIdResponse } from '../../common/CreatedObjectIdResponse';
import { Method } from '../../RequestConfig';

/**
 * A request that publishes a media object.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.1.0
 */
export class PostPublishMediaRequest extends AbstractRequest<CreatedObjectIdResponse> {
    /**
     * The page id.
     */
    private readonly pageId: string;

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param containerId the container id.
     */
    constructor(accessToken: string, pageId: string, containerId: string) {
        super(accessToken);
        this.pageId = pageId;
        this.params.creation_id = containerId;
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
        return `/${this.pageId}/media_publish`;
    }

    /**
     * @inheritdoc
     */
    protected method(): Method {
        return 'POST';
    }
}
