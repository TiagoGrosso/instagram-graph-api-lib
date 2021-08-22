/**
 * Interface to represent data regarding a Facebook page.
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since `next.release`
 */
export interface FacebookPage {
    /**
     * The page id.
     */
    id: string;

    /**
     * The page name.
     */
    name: string;

    /**
     * The access token associated with this page.
     */
    access_token: string;
}

/**
 * Interface to represent data regarding the list of Facebook
 * pages this user has authorized to your app.
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since `next.release`
 */
export interface AuthorizedFacebookPagesData {
    data: Array<FacebookPage>;
}
