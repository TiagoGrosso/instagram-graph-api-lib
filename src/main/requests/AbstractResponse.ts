/**
 * An abstract class to represent a response from the Instagram Graph API.
 *
 * @param T The type of data in the response.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export abstract class AbstractResponse<T> {
    /**
     * The response data.
     */
    protected data: T;

    /**
     * The constructor.
     *
     * @param data the response data.
     */
    constructor(data: T) {
        this.data = data;
    }

    /**
     * Gets the response data.
     *
     * @returns the response data.
     */
    public getData(): T {
        return this.data;
    }
}
