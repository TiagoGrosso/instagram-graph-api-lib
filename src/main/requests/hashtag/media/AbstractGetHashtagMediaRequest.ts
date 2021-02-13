import { AxiosResponse } from 'axios';
import { PublicMediaField } from '../../../Enums';
import { AbstractGetMediaRequest } from '../../AbstractGetMediaRequest';
import { GetHashtagMediaResponse } from './GetHashtagMediaResponse';

/**
 * A request that gets information about the media of an hashtag.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.5.0
 */
export abstract class AbstractGetHashtagMediaRequest extends AbstractGetMediaRequest<GetHashtagMediaResponse> {
    /**
     * The id of the hashtag.
     */
    protected hashtagId: string;

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param hashtagId the id of the hashtag.
     * @param userId the id of the user making the request.
     * @param fields the fields to retrieve from the API. If no field is specified, all are retrieved.
     */
    constructor(accessToken: string, hashtagId: string, userId: string, ...fields: PublicMediaField[]) {
        const actualFields: PublicMediaField[] = fields.length > 0 ? fields : Object.values(PublicMediaField);
        super(accessToken, ...actualFields);
        this.hashtagId = hashtagId;
        this.params.user_id = userId;
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<never>): GetHashtagMediaResponse {
        return new GetHashtagMediaResponse(response.data);
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.hashtagId}`;
    }
}
