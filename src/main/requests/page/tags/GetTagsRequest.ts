import { AxiosResponse } from 'axios';
import { MediaField, PublicMediaField } from '../../../Enums';
import { AbstractGetMediaRequest } from '../../AbstractGetMediaRequest';
import { GetTagsResponse } from './GetTagsResponse';

/**
 * A request that gets information about the media objects that a page was tagged in.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.0.0
 */
export class GetTagsRequest extends AbstractGetMediaRequest<GetTagsResponse> {
    /**
     * The page id.
     */
    private readonly pageId: string;

    /**
     * The constructor
     *
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param fields the fields to retrieve from the API for each media object. If no field is specified, all public fields are retrieved.
     */
    constructor(accessToken: string, pageId: string, ...fields: MediaField[]) {
        const actualFields: MediaField[] =
            fields.length > 0
                ? fields
                : Object.values(PublicMediaField).filter((field) => field != PublicMediaField.VIDEO_TITLE); //Filter out the video title because it's deprecated

        super(accessToken, ...actualFields);
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
