import { AxiosResponse } from 'axios';
import { MediaField } from '../../../Enums';
import { AbstractGetMediaRequest } from '../../AbstractGetMediaRequest';
import { GetPageMediaResponse } from './GetPageMediaResponse';

export class GetPageMediaRequest extends AbstractGetMediaRequest<GetPageMediaResponse> {
    private pageId: string;

    constructor(accessToken: string, pageId: string, ...fields: MediaField[]) {
        super(accessToken, ...fields);
        this.pageId = pageId;
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.pageId}/media`;
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<any>): GetPageMediaResponse {
        return new GetPageMediaResponse(response.data);
    }
}
