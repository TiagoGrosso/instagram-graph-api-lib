export interface FacebookPage {
    id: string;
    name: string;
    access_token: string;
}

/**
 * Interface to represent the data regarding the list of Facebook
 * pages this user has authorized to your app.
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since `next.release`
 */
export interface AuthorizedFacebookPagesData {
    data: Array<FacebookPage>;
}
