import { HashtagMediaField } from '../../../Enums';
import { AbstractGetMediaRequest } from '../../AbstractGetMediaRequest';
import { GetHashtagMediaResponse } from './GetHashtagMediaResponse';
import { MediaData } from '../../data/MediaData';
import { PagingData } from '../../data/Paging';

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
    constructor(accessToken: string, hashtagId: string, userId: string, ...fields: HashtagMediaField[]) {
        const actualFields: HashtagMediaField[] = fields.length > 0 ? fields : Object.values(HashtagMediaField);
        super(accessToken, ...actualFields);
        this.hashtagId = hashtagId;
        this.params.user_id = userId;
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: { data: MediaData[]; paging: PagingData }): GetHashtagMediaResponse {
        return new GetHashtagMediaResponse(response);
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.hashtagId}`;
    }
}
