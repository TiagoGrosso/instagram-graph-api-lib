import { AbstractRequest } from '../../AbstractRequest';
import { AuthorizedFacebookPagesData } from '../../data/AuthorizedFacebookPagesData';
import { GetAuthorizedFacebookPagesResponse } from './GetAuthorizedFacebookPagesResponse';

/**
 * Get a response to get the list of Facebook pages authorized by the user
 * to your app.
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since 2.0.0
 */
export class GetAuthorizedFacebookPagesRequest extends AbstractRequest<GetAuthorizedFacebookPagesResponse> {
    /**
     * The constructor.
     *
     * @param accessToken the access token.
     */
    constructor(accessToken: string) {
        super(accessToken);
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AuthorizedFacebookPagesData): GetAuthorizedFacebookPagesResponse {
        return new GetAuthorizedFacebookPagesResponse(response);
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return '/me/accounts';
    }
}
