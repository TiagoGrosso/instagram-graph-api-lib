import { AbstractMediaRequestConfigBuilder } from "../AbstractMediaRequestConfigBuilder";

/**
 * Builder for Media Requests.
 * 
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export class MediaRequestConfigBuilder extends AbstractMediaRequestConfigBuilder {
    
    /**
     * The id of the media object.
     */
    mediaId: string;

    /**
     * The constructor.
     * 
     * @param accessToken the access token.
     * @param mediaId the media ID.
     */
    constructor(accessToken: string, mediaId: string) {
        super(accessToken);
        this.mediaId = mediaId;
    }

    
    /**
     * @inheritdoc
     */
    getPath(): string {
        return `/${this.mediaId}`;
    }
}
