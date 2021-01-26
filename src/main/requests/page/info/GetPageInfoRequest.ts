import { AxiosResponse } from 'axios';
import { GetPageInfoResponse } from './GetPageInfoResponse';
import { AbstractRequest } from '../../AbstractRequest';
import { UserField } from '../../../Enums';

export class GetPageInfoRequest extends AbstractRequest<GetPageInfoResponse> {
    private userId: string;

    constructor(accessToken: string, userId: string, ...fields: UserField[]) {
        super(accessToken);
        this.userId = userId;
        let fieldsSet: Set<UserField> = fields.length > 0 ? new Set(fields) : new Set(Object.values(UserField));
        this.params.fields = Array.from(fieldsSet).join(',');
    }

    protected parseResponse(response: AxiosResponse<any>): GetPageInfoResponse {
        return new GetPageInfoResponse(response.data);
    }

    protected url(): string {
        return `/${this.userId}`;
    }
}
