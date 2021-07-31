import { AbstractResponse } from '../../AbstractResponse';
import { InstagramAccountInfoData } from '../../data/InstagramAccountInfoData';

/**
 * Class that represents a response from a Get Me request.
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since `next.release`
 */
export class GetInstagramAccountInfoResponse extends AbstractResponse<InstagramAccountInfoData> {
    /**
     * Gets the data of the account.
     *
     * @returns the data of the account.
     */
    public getAccountInfo(): InstagramAccountInfoData {
        return this.data;
    }
}
