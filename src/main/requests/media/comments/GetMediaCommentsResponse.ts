import { AbstractResponse } from '../../AbstractResponse';
import { CommentData } from '../../data/CommentData';

/**
 * Class that represents a response from a Get Media Comments request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.5.0
 */
export class GetMediaCommentsResponse extends AbstractResponse<CommentData[]> {
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
     *
     * @returns an array with the text of the all the comments.
     */
    public getTexts(): string[] {
        return this.data.map((elem) => elem.text);
    }

    /**
     * Gets a map from the id of the comments to their text.
     *
     * @returns a map from the id of the comments to their 'text'.
     */
    public getTextsMap(): Map<string, string> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.text];
            })
        );
    }

    /**
     * Gets an array with the timestamp of the all the comments.
     *
     * @returns an array with the timestamp of the all the comments.
     */
    public getTimestamps(): string[] {
        return this.data.map((elem) => elem.timestamp);
    }

    /**
     * Gets a map from the id of the comments to their timestamp.
     *
     * @returns a map from the id of the comments to their 'timestamp'.
     */
    public getTimestampsMap(): Map<string, string> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.timestamp];
            })
        );
    }
}
