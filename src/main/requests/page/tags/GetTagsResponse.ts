import { MediaData } from '../../data/MediaData';
import { Cursors, PagingData } from '../../data/Paging';
import { AbstractGetManyMediaResponse } from '../../AbstractGetManyMediaResponse';

/**
 * Class to represent responses to a Get Tags request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.0.0
 */
export class GetTagsResponse extends AbstractGetManyMediaResponse {
    /**
     * The cursors of the response.
     */
    private cursors: Cursors | undefined;

    /**
     * The constructor.
     *
     * @param body the body of the response.
     */
    constructor(body: { data: MediaData[]; paging: PagingData }) {
        super(body.data);
        this.cursors = body.paging?.cursors;
    }

    /**
     * Gets the cursors of the response.
     */
    public getCursors(): Cursors | undefined {
        return this.cursors;
    }

    /**
     * Gets the after cursor of the response.
     */
    public getAfter(): string | undefined {
        return this.cursors?.after;
    }

    /**
     * Gets the before cursor of the response.
     */
    public getBefore(): string | undefined {
        return this.cursors?.before;
    }
}
