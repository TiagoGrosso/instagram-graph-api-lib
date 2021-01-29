import { AbstractResponse } from '../../AbstractResponse';
import { PageInfoData } from '../../data/PageInfoData';

/**
 * Class that represents a response from a Page Info request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export class GetPageInfoResponse extends AbstractResponse<PageInfoData> {
    /**
     * Gets the id of the page.
     *
     * @returns the id of the page.
     */
    public getId(): string {
        return this.data.id;
    }

    /**
     * Gets the biography of the page.
     *
     * @returns the biography of the page.
     */
    public getBiography(): string | undefined {
        return this.data.biography;
    }

    /**
     * Gets the instragram id of the page.
     *
     * @returns the instragram id of the page.
     */
    public getIgId(): string | undefined {
        return this.data.ig_id;
    }

    /**
     * Gets the number of page followers.
     *
     * @returns the number of page followers.
     */
    public getFollowers(): number | undefined {
        return this.data.followers_count;
    }

    /**
     * Gets the number of page follows.
     *
     * @returns the number of page follows.
     */
    public getFollows(): number | undefined {
        return this.data.follows_count;
    }

    /**
     * Gets the number of media objects in the page.
     *
     * @returns the number of media objects in the page.
     */
    public getMediaCount(): number | undefined {
        return this.data.media_count;
    }

    /**
     * Gets the name of the page.
     *
     * @returns the name of the page.
     */
    public getName(): string | undefined {
        return this.data.name;
    }

    /**
     * Gets the URL of the profile picture of the page.
     *
     * @returns the URL of the profile picture of the page.
     */
    public getProfilePictureUrl(): string | undefined {
        return this.data.profile_picture_url;
    }

    /**
     * Gets the username of the page.
     *
     * @returns the username of the page.
     */
    public getUsername(): string | undefined {
        return this.data.username;
    }
}
