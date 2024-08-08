import { Method } from '../RequestConfig';
import { AbstractCommentRequest } from './AbstractCommentRequest';
import { CommentUpdateResponse } from './CommentUpdateResponse';

/**
 * Request to toggle whether a comment is hidden.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.6.0
 */
export class PostHideCommentRequest extends AbstractCommentRequest<CommentUpdateResponse> {
    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param commentId the id of the comment.
     * @param hide whether to hide or show the comment (default: true).
     */
    constructor(accessToken: string, commentId: string, hide = true) {
        super(accessToken, commentId);
        this.params.hide = hide;
    }

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
        return 'POST';
    }
}
