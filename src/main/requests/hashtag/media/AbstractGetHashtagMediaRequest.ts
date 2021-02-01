import { AxiosResponse } from 'axios';
import { HashtagMediaField } from '../../../Enums';
import { AbstractRequest } from '../../AbstractRequest';
import { GetHashtagMediaResponse } from './GetHashtagMediaResponse';

/**
 * A request that gets information about the media of an hashtag.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export abstract class AbstractGetHashtagMediaRequest extends AbstractRequest<GetHashtagMediaResponse> {
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
        super(accessToken);
        this.hashtagId = hashtagId;
        this.params.user_id = userId;
        const fieldsSet: Set<HashtagMediaField> =
            fields.length > 0 ? new Set(fields) : new Set(Object.values(HashtagMediaField));
        this.params.fields = Array.from(fieldsSet).join(',');
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
