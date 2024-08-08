import { AbstractRequest } from '../../AbstractRequest';
import { GetHashtagIdResponse } from './GetHashtagIdResponse';

/**
 * A request that gets the id of a hashtag.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.4.0
 */
export class GetHashtagIdRequest extends AbstractRequest<GetHashtagIdResponse> {
    /**
     * The constructor
     *
     * @param accessToken the access token.
     * @param userId the id of the user making the request
     * @param hashtag the hashtag.
     */
    constructor(accessToken: string, userId: string, hashtag: string) {
        super(accessToken);
        this.params.q = hashtag;
        this.params.user_id = userId;
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: { data: { id: string }[] }): GetHashtagIdResponse {
        return new GetHashtagIdResponse(response);
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return '/ig_hashtag_search';
    }
}
