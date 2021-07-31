import { AbstractResponse } from '../../AbstractResponse';
import { AuthorizedFacebookPagesData, FacebookPage } from '../../data/AuthorizedFacebookPagesData';

/**
 * Class that represents a response of user's Facebook pages
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since `next.release`
 */
export class GetAuthorizedFacebookPagesResponse extends AbstractResponse<AuthorizedFacebookPagesData> {
    /**
     * Gets the page id of the user that made the request.
     *
     * @returns the page id of the user that made the request.
     */
    public getAuthorizedFacebookPages(): Array<FacebookPage> {
        return this.data.data;
    }
}
