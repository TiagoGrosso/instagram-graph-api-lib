import { AbstractResponse } from '../../../../main/requests/AbstractResponse';

/**
 * Class that represents a response from a Get Media Children Response.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export class GetMediaChildrenResponse extends AbstractResponse<{ id: string }[]> {
    /**
     * The constructor.
     *
     * @param body the body of the response.
     */
    constructor(body: { data: { id: string }[] }) {
        super(body.data);
    }

    /**
     * Gets an array with the ids of all the comments.
     *
     * @returns an array with the ids of all the comments.
     */
    public getIds(): string[] {
        return this.data.map((elem) => elem.id);
    }
}
