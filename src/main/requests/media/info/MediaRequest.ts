import { AxiosResponse } from 'axios';
import { MediaField } from '../../../Enums';
import { AbstractMediaRequest } from '../../AbstractMediaRequest';
import { MediaResponse } from './MediaResponse';

export class MediaRequest extends AbstractMediaRequest<MediaResponse> {
    private mediaId: string;

    constructor(accessToken: string, mediaId: string, ...fields: MediaField[]) {
        super(accessToken, ...fields);
        this.mediaId = mediaId;
    }

    protected url(): string {
        return `/${this.mediaId}`;
    }

    protected parseResponse(response: AxiosResponse<any>): MediaResponse {
        return new MediaResponse(response.data);
    }
}
