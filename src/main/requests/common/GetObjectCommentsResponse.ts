import { AbstractResponse } from '../AbstractResponse';
import { CommentData, CommentReplyData } from '../data/CommentData';
import { InnerId } from '../data/Common';

/**
 * Class that represents a response from requests to get the comments on an object.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export class GetObjectCommentsResponse extends AbstractResponse<CommentData[]> {
    /**
     * The constructor.
     *
     * @param body the body of the response.
     */
    constructor(body: { data: CommentData[] }) {
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

    /**
     * Gets an array with the text of the all the comments.
     * If a comment object does not have the 'text' field, 'undefined' is returned for that object.
     *
     * @returns an array with the text of the all the comments.
     */
    public getTexts(): (string | undefined)[] {
        return this.data.map((elem) => elem.text);
    }

    /**
     * Gets a map from the id of the comments to their text.
     * If a comment object does not have the 'text' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the comments to their 'text'.
     */
    public getTextsMap(): Map<string, string | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.text];
            })
        );
    }

    /**
     * Gets an array with the timestamp of the all the comments.
     * If a comment object does not have the 'timestamp' field, 'undefined' is returned for that object.
     *
     * @returns an array with the timestamp of the all the comments.
     */
    public getTimestamps(): (string | undefined)[] {
        return this.data.map((elem) => elem.timestamp);
    }

    /**
     * Gets a map from the id of the comments to their timestamp.
     * If a comment object does not have the 'timestamp' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the comments to their 'timestamp'.
     */
    public getTimestampsMap(): Map<string, string | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.timestamp];
            })
        );
    }

    /**
     * Gets an array with whether each of the comments is hidden.
     * If a comment object does not have the 'hidden' field, 'undefined' is returned for that object.
     *
     * @returns an array with whether each of the comments is hidden.
     */
    public getHidden(): (boolean | undefined)[] {
        return this.data.map((elem) => elem.hidden);
    }

    /**
     * Gets a map from the id of the comments to whether they are hidden.
     * If a comment object does not have the 'hidden' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the comments to whether it is hidden.
     */
    public getHiddenMap(): Map<string, boolean | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.hidden];
            })
        );
    }

    /**
     * Gets an array with the like_count of the all the comments.
     * If a comment object does not have the 'like_count' field, 'undefined' is returned for that object.
     *
     * @returns an array with the like_count of the all the comments.
     */
    public getLikeCounts(): (number | undefined)[] {
        return this.data.map((elem) => elem.like_count);
    }

    /**
     * Gets a map from the id of the comments to their like_count.
     * If a comment object does not have the 'like_count' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the comments to their 'like_count'.
     */
    public getLikeCountsMap(): Map<string, number | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.like_count];
            })
        );
    }

    /**
     * Gets an array with the media of the all the comments.
     * If a comment object does not have the 'media' field, 'undefined' is returned for that object.
     *
     * @returns an array with the media of the all the comments.
     */
    public getMediaObjects(): (InnerId | undefined)[] {
        return this.data.map((elem) => elem.media);
    }

    /**
     * Gets a map from the id of the comments to their media.
     * If a comment object does not have the 'media' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the comments to their 'media'.
     */
    public getMediaObjectsMap(): Map<string, InnerId | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.media];
            })
        );
    }

    /**
     * Gets an array with the replies of the all the comments.
     * If a comment object does not have the 'replies' field, 'undefined' is returned for that object.
     * The replies field can only be returned for top level comments.
     *
     * @returns an array with the replies of the all the comments.
     */
    public getReplies(): (CommentReplyData[] | undefined)[] {
        return this.data.map((elem) => elem.replies?.data);
    }

    /**
     * Gets a map from the id of the comments to their replies.
     * If a comment object does not have the 'replies' field, 'undefined' is returned for that object.
     * The replies field can only be returned for top level comments.
     *
     * @returns a map from the id of the comments to their 'replies'.
     */
    public getRepliesMap(): Map<string, CommentReplyData[] | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.replies?.data];
            })
        );
    }

    /**
     * Gets an array with the user of the all the comments.
     * If a media object does not have the 'user' field, 'undefined' is returned for that object.
     *
     * @returns an array with the user of the all the comments.
     */
    public getUsers(): (InnerId | undefined)[] {
        return this.data.map((elem) => elem.user);
    }

    /**
     * Gets a map from the id of the comments to their user.
     * If a media object does not have the 'user' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the comments to their 'user'.
     */
    public getUsersMap(): Map<string, InnerId | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.user];
            })
        );
    }

    /**
     * Gets an array with the username of the all the comments.
     * If a media object does not have the 'username' field, 'undefined' is returned for that object.
     *
     * @returns an array with the username of the all the comments.
     */
    public getUsernames(): (string | undefined)[] {
        return this.data.map((elem) => elem.username);
    }

    /**
     * Gets a map from the id of the comments to their username.
     * If a media object does not have the 'username' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the comments to their 'username'.
     */
    public getUsernamesMap(): Map<string, string | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.username];
            })
        );
    }
}
