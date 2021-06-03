import { AbstractResponse } from '../AbstractResponse';
import { Paging, PagingData } from '../data/Paging';

/**
 * Class that represents a response from a request that simply returns an array of id objects.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export class ManyIdsResponse extends AbstractResponse<{ id: string }[]> {
    /**
     * The paging of the response.
     */
    private paging: Paging;

    /**
     * The constructor.
     *
     * @param body the body of the response
     */
    constructor(body: { data: { id: string }[]; paging: PagingData }) {
        super(body.data);
        this.paging = new Paging(body.paging);
    }

    /**
     * Gets the ids in the response.
     *
     * @returns the ids in the response.
     */
    public getIds(): string[] {
        return this.data.map((obj) => obj.id);
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
