import { AbstractRequest } from '../AbstractRequest';
import { AbstractResponse } from '../AbstractResponse';

/**
 * Abstract class for request related to comments.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.6.0
 */
export abstract class AbstractCommentRequest<T extends AbstractResponse<unknown>> extends AbstractRequest<T> {
    /**
     * The id of the comment.
     */
    private readonly commentId: string;

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param commentId the id of the comment.
     */
    constructor(accessToken: string, commentId: string) {
        super(accessToken);
        this.commentId = commentId;
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.commentId}`;
    }
}
