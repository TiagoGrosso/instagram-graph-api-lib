import { AxiosResponse } from 'axios';
import { MediaField } from '../../../Enums';
import { AbstractGetMediaRequest } from '../../AbstractGetMediaRequest';
import { GetMediaInfoResponse } from './GetMediaInfoResponse';

export class GetMediaInfoRequest extends AbstractGetMediaRequest<GetMediaInfoResponse> {
    private mediaId: string;

    constructor(accessToken: string, mediaId: string, ...fields: MediaField[]) {
        super(accessToken, ...fields);
        this.mediaId = mediaId;
    }

    protected url(): string {
        return `/${this.mediaId}`;
    }

    protected parseResponse(response: AxiosResponse<any>): GetMediaInfoResponse {
        return new GetMediaInfoResponse(response.data);
    }
}
