import { AbstractGetManyMediaResponse } from '../../AbstractGetManyMediaResponse';
import { MediaData } from '../../data/MediaData';
import { Paging, PagingData } from '../../data/Paging';

/**
 * Class that represents a response from a Get Hashtag Media request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.5.0
 */
export class GetHashtagMediaResponse extends AbstractGetManyMediaResponse {
    /**
     * The paging of the response.
     */
    private readonly paging: Paging;

    /**
     * The constructor.
     *
     * @param body the body of the response.
     */
    constructor(body: { data: MediaData[]; paging: PagingData }) {
        super(body.data);
        this.paging = new Paging(body.paging);
    }

    /**
     * Gets the paging of the response.
     *
     * @returns the paging of the response.
     */
    public getPaging(): Paging {
        return this.paging;
    }
}
