import { AxiosResponse } from 'axios';
import { CreatedObjectIdResponse } from '../../common/CreatedObjectIdResponse';
import { Method } from '../../RequestConfig';
import { AbstractRepliesRequest } from './AbstractRepliesRequest';

/**
 * Request that creates a reply to a comment.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.7.0
 */
export class PostReplyRequest extends AbstractRepliesRequest<CreatedObjectIdResponse> {
    /**
     * The constructor.
     *
     * @param accessToken The access token.
     * @param commentId the id of the comment object.
     * @param text the text of the reply.
     */
    constructor(accessToken: string, commentId: string, text: string) {
        super(accessToken, commentId);
        this.params.message = text;
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<never>): CreatedObjectIdResponse {
        return new CreatedObjectIdResponse(response.data);
    }

    /**
     * @inheritdoc
     */
    protected method(): Method {
        return 'POST';
    }
}
