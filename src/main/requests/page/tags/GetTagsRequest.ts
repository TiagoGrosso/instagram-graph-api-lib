import { AxiosResponse } from 'axios';
import { MediaField } from '../../../Enums';
import { AbstractGetMediaRequest } from '../../AbstractGetMediaRequest';
import { GetTagsResponse } from './GetTagsResponse';

/**
 * A request that gets information about the media objects that a page was tagged in.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export class GetTagsRequest extends AbstractGetMediaRequest<GetTagsResponse> {
    /**
     * The page id.
     */
    private pageId: string;

    /**
     * The constructor
     *
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param fields the fields to retrieve from the API for each media object. If no field is specified, all are retrieved.
     */
    constructor(accessToken: string, pageId: string, ...fields: MediaField[]) {
        super(accessToken, ...fields);
        this.pageId = pageId;
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.pageId}/tags`;
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<never>): GetTagsResponse {
        return new GetTagsResponse(response.data);
    }
}
