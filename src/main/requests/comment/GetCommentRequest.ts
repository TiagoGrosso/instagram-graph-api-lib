import { CommentField } from '../../Enums';
import { AbstractCommentRequest } from './AbstractCommentRequest';
import { GetCommentResponse } from './GetCommentResponse';
import { CommentData } from '../data/CommentData';

/**
 * Request to get information about a comment.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.6.0
 */
export class GetCommentRequest extends AbstractCommentRequest<GetCommentResponse> {
    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param commentId the id of the comment.
     * @param fields the fields to retrieve from the API. If no field is specified, all are retrieved.
     */
    constructor(accessToken: string, commentId: string, ...fields: CommentField[]) {
        super(accessToken, commentId);
        const fieldsSet: Set<CommentField> = fields.length > 0 ? new Set(fields) : new Set(Object.values(CommentField));
        this.params.fields = Array.from(fieldsSet).join(',');
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: CommentData): GetCommentResponse {
        return new GetCommentResponse(response);
    }
}
