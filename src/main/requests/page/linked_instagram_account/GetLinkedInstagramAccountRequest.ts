import { AxiosResponse } from 'axios';
import { AbstractRequest } from '../../AbstractRequest';
import { GetLinkedInstagramAccountResponse } from './GetLinkedInstagramAccountResponse';

/**
 * A Get request to obtain instagram_business_account information related with
 * a Facebock page
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since 2.0.0
 */
export class GetLinkedInstagramAccountRequest extends AbstractRequest<GetLinkedInstagramAccountResponse> {
    /**
     * The Facebook page id.
     *
     * A business Instagram account has to be linked to a Facebook page. To get the id
     * of an Instagram account you need the id of their linked Facebook page.
     */
    facebookPageId: string;

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param facebookPageId the facebook page id.
     */
    constructor(accessToken: string, facebookPageId: string) {
        super(accessToken);
        this.facebookPageId = facebookPageId;
        this.params.fields = 'instagram_business_account';
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<never>): GetLinkedInstagramAccountResponse {
        return new GetLinkedInstagramAccountResponse(response.data);
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.facebookPageId}`;
    }
}
