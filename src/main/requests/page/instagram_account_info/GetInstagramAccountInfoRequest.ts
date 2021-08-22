import { AxiosResponse } from 'axios';
import { AbstractRequest } from '../../AbstractRequest';
import { GetInstagramAccountInfoResponse } from './GetInstagramAccountInfoResponse';

/**
 * A Get request to obtain information about an Instagram account.
 *
 * @author Andres Gutierrez <andres99@gmail.com>
 * @since 2.0.0
 */
export class GetInstagramAccountInfoRequest extends AbstractRequest<GetInstagramAccountInfoResponse> {
    /**
     * The instagram page id.
     */
    instagramPageId: string;

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param instagramPageId the Instagram account id.
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
