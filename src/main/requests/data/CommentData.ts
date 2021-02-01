/**
 * Interface to represent the data regarding a comment.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.5.0
 */
export interface CommentData {
    /**
     * The id of the comment.
     */
    id: string;

    /**
     * The creation date of the comment in ISO 8601.
     */
    timestamp: string;

    /**
     * The text of the comment.
     */
    text: string;
}
