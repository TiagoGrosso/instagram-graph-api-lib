import { AxiosResponse } from 'axios';
import { AbstractRequest } from '../../AbstractRequest';
import { GetInstagramAccountInfoResponse } from './GetInstagramAccountInfoResponse';

/**
 * A Get request to obtain Instagram account information.
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since `next.release`
 */
export class GetInstagramAccountInfoRequest extends AbstractRequest<GetInstagramAccountInfoResponse> {
    // The ID of Instagram you want information
    instagramPageId: string;

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param instagramPageId Instagram account ID
     */
    constructor(accessToken: string, instagramPageId: string) {
        super(accessToken);
        this.instagramPageId = instagramPageId;
        this.params.fields = 'profile_picture_url,name,username';
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<never>): GetInstagramAccountInfoResponse {
        return new GetInstagramAccountInfoResponse(response.data);
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.instagramPageId}`;
    }
}
