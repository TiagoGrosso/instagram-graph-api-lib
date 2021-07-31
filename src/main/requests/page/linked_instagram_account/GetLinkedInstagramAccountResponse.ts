import { AbstractResponse } from '../../AbstractResponse';
import { LinkedInstagramAccountData } from '../../data/LinkedInstagramAccountData';

/**
 * Class that represents a response from a Facebook page response
 * Is used to get linked instagram account ID
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since `next.release`
 */
export class GetLinkedInstagramAccountResponse extends AbstractResponse<LinkedInstagramAccountData> {
    /**
     * First gets the list of authorized facebook pages.
     * Facebook requires Instagram accounts to be linked to a Facebook page and also
     * to be Instagram business accounts. If these conditions are meet. This
     * endpoint will return linked Instagram Page ID.
     *
     * @returns the list of authorized facebook pages.
     */
    public getInstagramPageId(): string {
        return this.data.instagram_business_account.id;
    }
}
