import { AbstractResponse } from '../AbstractResponse';

/**
 * A class to represent responses from any update to comments.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export class CommentUpdateResponse extends AbstractResponse<{ success: boolean }> {
    /**
     * Whether the request was successful.
     */
    public wasSuccessful(): boolean {
        return this.data.success;
    }
}
