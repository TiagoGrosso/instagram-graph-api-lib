/**
 * Interface to represent the paging data in a paged response.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export interface PagingData {
    /**
     * The previous page of the response.
     */
    previous?: string;

    /**
     * The next page of the response.
     */
    next?: string;

    /**
     * The {@link Cursors} of the response.
     */
    cursors?: Cursors;
}

/**
 * Interface to represent the cursors of a paged response.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export interface Cursors {
    /**
     * The object before the one of the response.
     */
    before?: string;

    /**
     * The object after the one of the response.
     */
    after?: string;
}

/**
 * Class to represent the Paging of a paged response.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export class Paging {
    /**
     * The paging data.
     */
    private pagingData: PagingData;

    /**
     * The constructor.
     *
     * @param pagingData the paging data.
     */
    constructor(pagingData: PagingData) {
        this.pagingData = pagingData;
    }

    /**
     * Gets the paging of the response.
     *
     * @returns the paging of the response.
     */
    public getPaging(): PagingData {
        return this.pagingData;
    }

    /**
     * Gets the cursors of the response.
     *
     * @returns the cursors of the response.
     */
    public getCursors(): Cursors | undefined {
        return this.pagingData.cursors;
    }

    /**
     * Gets the previous page of the response.
     *
     * @returns the previous page of the response.
     */
    public getPrevious(): string | undefined {
        return this.pagingData.previous;
    }

    /**
     * Gets the next page of the response.
     *
     * @returns the next page of the response.
     */
    public getNext(): string | undefined {
        return this.pagingData.next;
    }

    /**
     * Gets the object before the one in the response.
     *
     * @returns the object before the one in the response.
     */
    public getBefore(): string | undefined {
        return this.pagingData.cursors?.before;
    }

    /**
     * Gets the object after the one in the response.
     *
     * @returns the object after the one in the response.
     */
    public getAfter(): string | undefined {
        return this.pagingData.cursors?.after;
    }
}
