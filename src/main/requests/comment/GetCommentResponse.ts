import { AbstractResponse } from '../AbstractResponse';
import { CommentData, CommentReplyData } from '../data/CommentData';
import { InnerId } from '../data/Common';

/**
 * Class that represents a response from the Get Comment Request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.6.0
 */
export class GetCommentResponse extends AbstractResponse<CommentData> {
    /**
     * Gets the id of the comment.
     *
     * @returns the id of the comment.
     */
    public getId(): string {
        return this.data.id;
    }

    /**
     * Gets whether the comment is hidden.
     *
     * @returns whether the comment is hidden.
     */
    public isHidden(): boolean | undefined {
        return this.data.hidden;
    }

    /**
     * Gets the number of likes in the comment.
     *
     * @returns the number of likes in the comment.
     */
    public getLikeCount(): number | undefined {
        return this.data.like_count;
    }

    /**
     * Gets the parent media of the comment.
     *
     * @returns the parent media of the comment.
     */
    public getParentMedia(): InnerId | undefined {
        return this.data.media;
    }

    /**
     * Gets the parent media id of the comment.
     *
     * @returns the parent media id of the comment.
     */
    public getParentMediaId(): string | undefined {
        return this.data.media?.id;
    }

    /**
     * Gets the replies to the comment.
     *
     * @returns the replies to the comment.
     */
    public getReplies(): CommentReplyData[] | undefined {
        return this.data.replies?.data;
    }

    /**
     * Gets the text of the comment.
     *
     * @returns the text of the comment.
     */
    public getText(): string | undefined {
        return this.data.text;
    }

    /**
     * Gets the timestamp of the comment.
     *
     * @returns the timestamp of the comment.
     */
    public getTimestamp(): string | undefined {
        return this.data.timestamp;
    }

    /**
     * Gets the user that owns the comment.
     *
     * @returns the user that owns the comment.
     */
    public getUser(): InnerId | undefined {
        return this.data.user;
    }

    /**
     * Gets the id user that owns the comment.
     *
     * @returns the id user that owns the comment.
     */
    public getUserId(): string | undefined {
        return this.data.user?.id;
    }

    /**
     * Gets the username of the owner of the comment.
     *
     * @returns the username of the owner of the comment.
     */
    public getUsername(): string | undefined {
        return this.data.username;
    }
}
