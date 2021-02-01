import { AbstractResponse } from '../../AbstractResponse';

/**
 * Class that represents a response from a Post Media Comment request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export class PostMediaCommentResponse extends AbstractResponse<{ id: string }> {
    /**
     * Gets the id of the comment that was created.
     *
     * @returns the id of the comment that was created.
     */
    public getId(): string {
        return this.data.id;
    }
}
