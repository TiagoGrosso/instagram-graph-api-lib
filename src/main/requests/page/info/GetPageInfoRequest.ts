import { AxiosResponse } from 'axios';
import { GetPageInfoResponse } from './GetPageInfoResponse';
import { AbstractRequest } from '../../AbstractRequest';
import { PageField } from '../../../Enums';

/**
 * A request that gets information about a page.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.2.0
 */
export class GetPageInfoRequest extends AbstractRequest<GetPageInfoResponse> {
    /**
     * The page id.
     */
    private readonly pageId: string;

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param fields the fields to retrieve from the API. If no field is specified, all are retrieved.
     */
    constructor(accessToken: string, pageId: string, ...fields: PageField[]) {
        super(accessToken);
        this.pageId = pageId;
        const fieldsSet: Set<PageField> = fields.length > 0 ? new Set(fields) : new Set(Object.values(PageField));
        this.params.fields = Array.from(fieldsSet).join(',');
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<never>): GetPageInfoResponse {
        return new GetPageInfoResponse(response.data);
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.pageId}`;
    }
}
