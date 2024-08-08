import { MediaField } from '../../../Enums';
import { AbstractGetMediaRequest } from '../../AbstractGetMediaRequest';
import { GetPageMediaResponse } from './GetPageMediaResponse';
import { MediaData } from '../../data/MediaData';
import { PagingData } from '../../data/Paging';

/**
 * A request that gets information about the media of a page.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.2.0
 */
export class GetPageMediaRequest extends AbstractGetMediaRequest<GetPageMediaResponse> {
    /**
     * The page id.
     */
    private readonly pageId: string;

    /**
     * The constructor
     *
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param fields the fields to retrieve from the API. If no field is specified, all are retrieved.
     */
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
    protected parseResponse(response: { data: MediaData[]; paging: PagingData }): GetPageMediaResponse {
        return new GetPageMediaResponse(response);
    }
}
