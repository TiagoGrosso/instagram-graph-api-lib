import { Method } from '../RequestConfig';
import { AbstractCommentRequest } from './AbstractCommentRequest';
import { CommentUpdateResponse } from './CommentUpdateResponse';

/**
 * Request to delete a comment.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.6.0
 */
export class DeleteCommentRequest extends AbstractCommentRequest<CommentUpdateResponse> {
    /**
     * @inheritdoc
     */
    protected parseResponse(response: { success: boolean }): CommentUpdateResponse {
        return new CommentUpdateResponse(response);
    }

    /**
     * @inheritdoc
     */
    protected method(): Method {
        return 'DELETE';
    }
}
