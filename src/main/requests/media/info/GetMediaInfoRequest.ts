import { AxiosResponse } from 'axios';
import { MediaField, PublicMediaField } from '../../../Enums';
import { AbstractGetMediaRequest } from '../../AbstractGetMediaRequest';
import { GetMediaInfoResponse } from './GetMediaInfoResponse';

/**
 * A request that gets information about a media object.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.2.0
 */
export class GetMediaInfoRequest extends AbstractGetMediaRequest<GetMediaInfoResponse> {
    /**
     * The media object id.
     */
    private mediaId: string;

    /**
     * The constructor
     *
     * @param accessToken the access token.
     * @param mediaId the media object id.
     * @param fields the fields to retrieve from the API for each media object. If no field is specified, all public fields are retrieved.
     */
    constructor(accessToken: string, mediaId: string, ...fields: MediaField[]) {
        const actualFields: MediaField[] = fields.length > 0 ? fields : Object.values(PublicMediaField);
        super(accessToken, ...actualFields);
        this.mediaId = mediaId;
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.mediaId}`;
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<never>): GetMediaInfoResponse {
        return new GetMediaInfoResponse(response.data);
    }
}
