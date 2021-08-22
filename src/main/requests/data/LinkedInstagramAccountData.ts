/**
 * Interface to represent data about a linked Instagram account.
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since 2.0.0
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
