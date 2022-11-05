import { AbstractResponse } from '../../AbstractResponse';

/**
 * Class that represents a response from a Get Hashtag ID request.
 * Technically the request will return an array of objects, but in practice it will always have a single item.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.4.0
 */
export class GetHashtagIdResponse extends AbstractResponse<{ id: string }[]> {
    /**
     * The constructor.
     *
     * @param body the body of the response
     */
    constructor(body: { data: { id: string }[] }) {
        super(body.data);
    }

    /**
     * Gets the id of the hashtag.
     *
     * @returns the id of the hashtag.
     */
    public getId(): string {
        return this.data[0].id;
    }
}
