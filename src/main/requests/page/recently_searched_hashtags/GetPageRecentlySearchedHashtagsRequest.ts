import { AxiosResponse } from 'axios';
import { AbstractRequest } from '../../AbstractRequest';
import { ManyIdsResponse } from '../../common/ManyIdsResponse';
import { PagingData } from '../../data/Paging';

/**
 * A request that gets the Recently Searched Hashtags of a user/page.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.3.0
 */
export class GetPageRecentlySearchedHashtagsRequest extends AbstractRequest<ManyIdsResponse> {
    /**
     * The page id.
     */
    private pageId: string;

    /**
     * The constructor
     *
     * @param accesToken the access token.
     * @param pageId the page id
     */
    constructor(accesToken: string, pageId: string) {
        super(accesToken);
        this.pageId = pageId;
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<{ data: { id: string }[]; paging: PagingData }>): ManyIdsResponse {
        return new ManyIdsResponse({ data: response.data.data, paging: response.data.paging });
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.pageId}/recently_searched_hashtags`;
    }
}
