import { AxiosResponse } from 'axios';
import { AbstractRequest } from '../../AbstractRequest';
import { GetMeResponse } from './GetMeResponse';

/**
 * A Get request to obtain information about the user making it.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.3.0
 */
export class GetMeRequest extends AbstractRequest<GetMeResponse> {
    /**
     * The constructor.
     *
     * @param accessToken the access token.
     */
    constructor(accessToken: string) {
        super(accessToken);
        this.params.fields = 'instagram_business_account';
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<any>): GetMeResponse {
        return new GetMeResponse(response.data);
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return '/me';
    }
}
