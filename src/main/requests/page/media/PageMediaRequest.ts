import { AxiosResponse } from 'axios';
import { MediaField } from '../../../Enums';
import { AbstractMediaRequest } from '../../AbstractMediaRequest';
import { PageMediaResponse } from './PageMediaResponse';

export class PageMediaRequest extends AbstractMediaRequest<PageMediaResponse> {
    private pageId: string;

    constructor(accessToken: string, pageId: string, ...fields: MediaField[]) {
        super(accessToken, ...fields);
        this.pageId = pageId;
    }

    protected url(): string {
        return `/${this.pageId}/media`;
    }

    protected parseResponse(response: AxiosResponse<any>): PageMediaResponse {
        return new PageMediaResponse(response.data);
    }
}
