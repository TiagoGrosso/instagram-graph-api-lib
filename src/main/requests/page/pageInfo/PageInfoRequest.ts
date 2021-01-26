import { AxiosResponse } from 'axios';
import { PageInfoResponse } from './PageInfoResponse';
import { AbstractRequest } from '../../AbstractRequest';
import { UserField } from '../../../Enums';

export class PageInfoRequest extends AbstractRequest<PageInfoResponse> {
    private userId: string;

    constructor(accessToken: string, userId: string, ...fields: UserField[]) {
        super(accessToken);
        this.userId = userId;
        let fieldsSet: Set<UserField> = fields.length > 0 ? new Set(fields) : new Set(Object.values(UserField));
        this.params.fields = Array.from(fieldsSet).join(',');
    }

    protected parseResponse(response: AxiosResponse<any>): PageInfoResponse {
        return new PageInfoResponse(response.data);
    }

    protected url(): string {
        return `/${this.userId}`;
    }
}
