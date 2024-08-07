import { CommentField } from '../../../Enums';
import { GetObjectCommentsResponse } from '../../common/GetObjectCommentsResponse';
import { AbstractMediaCommentsRequest } from './AbstractMediaCommentsRequest';
import { CommentData } from '../../data/CommentData';

/**
 * A request that gets the comments of a media object.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.5.0
 */
export class GetMediaCommentsRequest extends AbstractMediaCommentsRequest<GetObjectCommentsResponse> {
    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param mediaId the media object id.
     * @param fields the fields to retrieve from the API. If no field is specified, all are retrieved.
     */
    constructor(accessToken: string, mediaId: string, ...fields: CommentField[]) {
        super(accessToken, mediaId);
        const fieldsSet: Set<CommentField> = fields.length > 0 ? new Set(fields) : new Set(Object.values(CommentField));
        this.params.fields = Array.from(fieldsSet).join(',');
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: { data: CommentData[] }): GetObjectCommentsResponse {
        return new GetObjectCommentsResponse(response);
    }
}
