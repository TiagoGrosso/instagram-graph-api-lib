import { MediaData } from '../../data/MediaData';
import { Paging, PagingData } from '../../data/Paging';
import { AbstractGetManyMediaResponse } from '../../AbstractGetManyMediaResponse';

/**
 * Class that represents a response from a Page Media request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export class GetPageMediaResponse extends AbstractGetManyMediaResponse {
    /**
     * The paging of the response.
     */
    private readonly paging: Paging;

    /**
     * The constructor.
     *
     * @param body the body of the response
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
