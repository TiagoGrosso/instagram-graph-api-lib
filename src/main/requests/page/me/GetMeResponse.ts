import { AbstractResponse } from '../../AbstractResponse';
import { MeData } from '../../data/MeData';

/**
 * Class that represents a response from a Get Me request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export class GetMeResponse extends AbstractResponse<MeData> {
    /**
     * Gets the page id of the user that made the request.
     *
     * @returns the page id of the user that made the request.
     */
    public getPageId(): string {
        return this.data.id;
    }

    /**
     * Gets the instagram page id of the user that made the request.
     *
     * @returns the intagram page id of the user that made the request.
     */
    public getIgPageId(): string | undefined {
        return this.data.instagram_business_account?.id;
    }
}
