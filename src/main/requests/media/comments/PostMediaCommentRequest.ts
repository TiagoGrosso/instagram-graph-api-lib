import { Method } from '../../RequestConfig';
import { AbstractMediaCommentsRequest } from './AbstractMediaCommentsRequest';
import { CreatedObjectIdResponse } from '../../common/CreatedObjectIdResponse';

/**
 * A request that creates a comment on a media object.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.5.0
 */
export class PostMediaCommentRequest extends AbstractMediaCommentsRequest<CreatedObjectIdResponse> {
    /**
     * The constructor.
     *
     * @param accessToken The access token.
     * @param mediaId the id of the media object.
     * @param text the text of the comment.
     */
    constructor(accessToken: string, mediaId: string, text: string) {
        super(accessToken, mediaId);
        this.params.message = text;
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: { id: string }): CreatedObjectIdResponse {
        return new CreatedObjectIdResponse(response);
    }

    /**
     * @inheritdoc
     */
    protected method(): Method {
        return 'POST';
    }
}
