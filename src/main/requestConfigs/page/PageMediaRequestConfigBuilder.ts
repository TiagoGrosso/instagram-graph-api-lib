import { AbstractMediaRequestConfigBuilder } from "../AbstractMediaRequestConfigBuilder";

/**
 * Builder for Page Media request configs.
 * 
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export class PageMediaRequestConfigBuilder extends AbstractMediaRequestConfigBuilder {

    /**
     * The id of the user.
     */
    userId: string 

    /**
     * The constructor.
     * 
     * @param accessToken the access token.
     * @param userId the user ID.
     */
    constructor(accessToken: string, userId: string) {
        super(accessToken);
        this.userId = userId;
    }

    /**
     * @inheritdoc
     */
    getPath(): string {
        return `/${this.userId}/media`;
    }
}
