import { AxiosResponse } from 'axios';
import { CommentField } from '../../../Enums';
import { GetObjectCommentsResponse } from '../../common/GetObjectCommentsResponse';
import { AbstractRepliesRequest } from './AbstractRepliesRequest';

/**
 * A request to get the replies to a comment.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.7.0
 */
export class GetRepliesRequest extends AbstractRepliesRequest<GetObjectCommentsResponse> {
    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param pageId the id of the comment.
     * @param fields the fields to retrieve from the API. If no field is specified, all are retrieved.
     */
    constructor(accessToken: string, commentId: string, ...fields: CommentField[]) {
        super(accessToken, commentId);
        const fieldsSet: Set<CommentField> = fields.length > 0 ? new Set(fields) : new Set(Object.values(CommentField));
        fieldsSet.delete(CommentField.REPLIES); // Only allowed for top level comments.
        this.params.fields = Array.from(fieldsSet).join(',');
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<never>): GetObjectCommentsResponse {
        return new GetObjectCommentsResponse(response.data);
    }
}
