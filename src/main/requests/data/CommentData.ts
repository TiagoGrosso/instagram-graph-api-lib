import { InnerId } from './Common';

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
    timestamp?: string;

    /**
     * The text of the comment.
     */
    text?: string;

    /**
     * Whether the comment is hidden.
     */
    hidden?: boolean;

    /**
     * The number of likes on the comment.
     */
    like_count?: number;

    /**
     * The media object that contains the comment.
     */
    media?: InnerId;

    /**
     * The replies to the comment.
     */
    replies?: CommentReplies;

    /**
     * The user that made the comment. Only returned if the user making the query also owns the comment, otherwise, the username field will be included
     */
    user?: InnerId;

    /**
     * The username of the user who made the comment.
     */
    username?: string;

    /**
     * The information about the comment creator
     */
    from?: {
        /**
         * The IGSID of the comment creator.
         */
        id: string;

        /**
         * The username of the comment creator.
         */
        username: string;
    };

    /**
     * The ID of the parent IG Comment if this comment was created on another IG Comment (i.e. a reply to another comment).
     */
    parent_id?: string;
}

/**
 * Interface to represent the data regarding a reply to a comment.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.6.0
 */
export interface CommentReplyData {
    /**
     * The id of the reply comment.
     */
    id: string;

    /**
     * The creation date of the reply comment in ISO 8601.
     */
    timestamp: string;

    /**
     * The text of the reply comment.
     */
    text: string;
}

/**
 * The type of comment replies object.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.6.0
 */
export type CommentReplies = {
    /**
     * The data of the replies object.
     */
    data: CommentReplyData[];
};
