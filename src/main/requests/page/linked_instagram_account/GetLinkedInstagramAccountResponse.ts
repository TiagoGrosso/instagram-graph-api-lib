import { AbstractResponse } from '../../AbstractResponse';
import { LinkedInstagramAccountData } from '../../data/LinkedInstagramAccountData';

/**
 * Class that represents a response from a Facebook page response
 * Is used to get linked Instagram account id.
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since 2.0.0
 */
export class GetLinkedInstagramAccountResponse extends AbstractResponse<LinkedInstagramAccountData> {
    /**
     * Gets the list of authorized facebook pages.
     *
     * Facebook requires Instagram accounts to be linked to a Facebook page and also
     * to be Instagram business accounts. If these conditions are met, this
     * request will return the linked Instagram Page ID.
     *
     * @returns the list of authorized facebook pages.
     */
    public getInstagramPageId(): string {
        return this.data.instagram_business_account.id;
    }
}
