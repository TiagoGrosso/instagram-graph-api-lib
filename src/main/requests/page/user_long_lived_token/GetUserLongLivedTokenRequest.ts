import { AbstractRequest } from '../../AbstractRequest';
import { GetUserLongLivedTokenResponse } from './GetUserLongLivedTokenResponse';
import { UserLongLivedTokenData } from '../../data/UserLongLivedTokenData';

/**
 *  When requesting a long-lived access token on behalf of the user that is
 *  using your app, you need to request this type in the API
 */
const GRANT_TYPE = 'fb_exchange_token';

/**
 * This class is used to exchange a short-lived-token by a long-lived-token that you get when
 * the user performs a Facebook login in your page and wants to authorize your app
 * to make requests for longer than a short-lived token's expiration.
 *
 * This long-lived-token last ~60 days according to Facebook documentation:
 * https://developers.facebook.com/docs/facebook-login/access-tokens/refreshing
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since 2.0.0
 */
export class GetUserLongLivedTokenRequest extends AbstractRequest<GetUserLongLivedTokenResponse> {
    /**
     * The app id.
     */
    appId: string;

    /**
     * The app secret id.
     */
    appSecretId: string;

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param appId the app id.
     * @param appSecretId the app secret id.
     */
    constructor(accessToken: string, appId: string, appSecretId: string) {
        super(accessToken);
        this.appId = appId;
        this.appSecretId = appSecretId;
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: UserLongLivedTokenData): GetUserLongLivedTokenResponse {
        return new GetUserLongLivedTokenResponse(response);
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return [
            '/oauth/access_token?',
            `grant_type=${GRANT_TYPE}&`,
            `client_id=${this.appId}&`,
            `client_secret=${this.appSecretId}&`,
            `fb_exchange_token=${this.params.access_token}`,
        ].join('');
    }
}
