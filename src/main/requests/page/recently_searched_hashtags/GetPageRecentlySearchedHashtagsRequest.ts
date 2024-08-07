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
    private readonly pageId: string;

    /**
     * The constructor
     *
     * @param accessToken the access token.
     * @param pageId the page id
     */
    constructor(accessToken: string, pageId: string) {
        super(accessToken);
        this.pageId = pageId;
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: { data: { id: string }[]; paging: PagingData }): ManyIdsResponse {
        return new ManyIdsResponse({ data: response.data, paging: response.paging });
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.pageId}/recently_searched_hashtags`;
    }
}
