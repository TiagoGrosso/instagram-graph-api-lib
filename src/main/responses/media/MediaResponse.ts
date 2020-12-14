import { MediaData } from "../data/MediaData";

/**
 * Class that represents a response from a Media request.
 * 
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export class MediaResponse {
    
    /**
     * The data of the response.
     */
    private data: MediaData;

    /**
     * The constructor.
     * 
     * @param data the data of the response.
     */
    constructor(data: MediaData){
        this.data = data;
    }

    /**
     * Gets the data of the response.
     * 
     * @returns the data of the response.
     */
    public getData(): MediaData {
        return this.data;
    }

    /**
     * Gets the id of the media object.
     * 
     * @returns the id of the media object.
     */
    public getId(): string {
        return this.data.id;
    }

    /**
     * Gets the caption of the media object.
     * 
     * @returns the caption of the media object.
     */
    public getCaption(): string | undefined {
        return this.data.caption;
    }

    /**
     * Gets the ig_id of the media object.
     * 
     * @returns the ig_id of the media object.
     */
    public getIgId(): string | undefined {
        return this.data.ig_id;
    }

    /**
     * Gets the comments count of the media object.
     * 
     * @returns the comments count of the media object.
     */
    public getCommentsCount(): number | undefined {
        return this.data.comments_count;
    }

    /**
     * Whether comments are enabled on the media object.
     * 
     * @returns whether comments are enabled on the media object.
     */
    public isCommentsEnabled(): boolean | undefined {
        return this.data.is_comment_enabled;
    }

    /**
     * Gets the like count of the media object.
     * 
     * @returns the like count of the media object.
     */
    public getLikeCount(): number | undefined {
        return this.data.like_count;
    }

    /**
     * Gets the type of the media object.
     * 
     * @returns the type of the media object.
     */
    public getMediaType(): string | undefined {
        return this.data.media_type;
    }

    /**
     * Gets the URL of the media object.
     * 
     * @returns the URL of the media object.
     */
    public getMediaUrl(): string | undefined {
        return this.data.media_url;
    }

    /**
     * Gets the owner of the media object.
     * 
     * @returns the owner of the media object.
     */
    public getOwner(): { id : string } | undefined {
        return this.data.owner;
    }

    /**
     * Gets the owner id of the media object.
     * 
     * @returns the owner id of the media object.
     */
    public getOwnerId(): string | undefined {
        return this.data.owner?.id ;
    }

     /**
     * Gets the permalink of the media object.
     * 
     * @returns the permalink of the media object.
     */
    public getPermalink(): string | undefined {
        return this.data.permalink;
    }
    
     /**
     * Gets the shortcode of the media object.
     * 
     * @returns the shortcode of the media object.
     */
    public getShortcode(): string | undefined {
        return this.data.shortcode;
    }

    /**
     * Gets the timestamp of the media object.
     * 
     * @returns the timestamp of the media object.
     */
    public getTimestamp(): Date | undefined {
        return this.data.timestamp != undefined ? new Date(this.data.timestamp) : undefined;
    }

    /**
     * Gets the username of the media object.
     * 
     * @returns the username of the media object.
     */
    public getUsername(): string | undefined {
        return this.data.username;
    }
}