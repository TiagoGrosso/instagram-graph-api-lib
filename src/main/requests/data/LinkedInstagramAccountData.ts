/**
 * Interface to represent data about a linked Instagram account.
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since `next.release`
 */
export interface LinkedInstagramAccountData {
    /**
     * The associated instagram business account.
     */
    instagram_business_account: {
        /**
         * The business account id.
         */
        id: string;
    };
    /**
     * The instagram account id.
     */
    id: string;
}
