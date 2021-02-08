import { AxiosResponse } from 'axios';
import { Method } from '../RequestConfig';
import { AbstractCommentRequest } from './AbstractCommentRequest';
import { CommentUpdateResponse } from './CommentUpdateResponse';

/**
 * Request to delete a comment.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export class DeleteCommentRequest extends AbstractCommentRequest<CommentUpdateResponse> {
    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<never>): CommentUpdateResponse {
        return new CommentUpdateResponse(response.data);
    }

    /**
     * @inheritdoc
     */
    protected method(): Method {
        return 'DELETE';
    }
}
