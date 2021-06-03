import { AbstractResponse } from '../AbstractResponse';

/**
 * Class that represents a response from a request that creates an object.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.5.0
 */
export class CreatedObjectIdResponse extends AbstractResponse<{ id: string }> {
    /**
     * Gets the id of the object that was created.
     *
     * @returns the id of the object that was created.
     */
    public getId(): string {
        return this.data.id;
    }
}
