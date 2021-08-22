/**
 * Basic info of connected Instagram account.
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since `next.release`
 */
export interface InstagramAccountInfoData {
    /**
     * The instagram account id.
     */
    id: string;

    /**
     * The instagram account username.
     */
    username: string;

    /**
     * The instagram account name.
     */
    name: string;

    /**
     * The instagram account profile picture URL.
     */
    profile_picture_url: string;
}
