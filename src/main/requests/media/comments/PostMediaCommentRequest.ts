import { AxiosResponse } from 'axios';
import { Method } from '../../RequestConfig';
import { AbstractMediaCommentsRequest } from './AbstractMediaCommentsRequest';
import { PostMediaCommentResponse } from './PostMediaCommentResponse';

/**
 * A request that creates a comment on a media object.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export class PostMediaCommentRequest extends AbstractMediaCommentsRequest<PostMediaCommentResponse> {
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
    protected parseResponse(response: AxiosResponse<never>): PostMediaCommentResponse {
        return new PostMediaCommentResponse(response.data);
    }

    /**
     * @inheritdoc
     */
    protected method(): Method {
        return 'POST';
    }
}
