import { AbstractResponse } from '../../AbstractResponse';
import { UserLongLivedTokenData } from '../../data/UserLongLivedTokenData';

/**
 * Represents a response from the {@link GetUserLongLivedTokenRequest}"
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since `next.release`
 */
export class GetUserLongLivedTokenResponse extends AbstractResponse<UserLongLivedTokenData> {
    /**
     * Gets user's long-lived-token.
     *
     * @returns the user's long-lived access token.
     */
    public getLongLivedToken(): string {
        return this.data.access_token;
    }
}
