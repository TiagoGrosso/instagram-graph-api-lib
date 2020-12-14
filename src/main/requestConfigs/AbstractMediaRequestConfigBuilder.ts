import { MediaField } from "../Enums";
import { AbstractRequestConfigBuilder } from "./AbstractRequestConfigBuilder";
import { RequestConfig } from "./RequestConfig";

/**
 * Abstract builder for configs of requests that retrieve media information.
 * 
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export abstract class AbstractMediaRequestConfigBuilder extends AbstractRequestConfigBuilder {

    /**
     * The fields that should be retrieved from the media.
     */
    fields: Set<MediaField> = new Set();

    /**
     * The constructor.
     * 
     * @param accessToken the access token.
     */
    constructor(accessToken: string) {
        super(accessToken);
    } 

    /**
     * Builds the request config.
     */
    build(): RequestConfig {
        this.params.fields = Array.from(this.fields).join();
        return super.build();
    }

    /**
     * Adds the caption to the list of fields that will be retrieved.
     */
    withCaption(): AbstractMediaRequestConfigBuilder {
        this.fields.add(MediaField.CAPTION);
        return this;
    }

    /**
     * Adds the number of comments to the list of fields that will be retrieved.
     */
    withCommentsCount(): AbstractMediaRequestConfigBuilder {
        this.fields.add(MediaField.COMMENTS_COUNT);
        return this;
    }

    /**
     * Adds the ID to the list of fields that will be retrieved.
     */
    withId(): AbstractMediaRequestConfigBuilder {
        this.fields.add(MediaField.ID);
        return this;
    }

    /**
     * Adds the instagram ID to the list of fields that will be retrieved.
     */
    withIgId(): AbstractMediaRequestConfigBuilder {
        this.fields.add(MediaField.IG_ID);
        return this;
    }

    /**
     * Adds whether comments are enabled to the list of fields that will be retrieved.
     */
    withIsCommentEnabled(): AbstractMediaRequestConfigBuilder {
        this.fields.add(MediaField.IS_COMMENT_ENABLED);
        return this;
    }

    /**
     * Adds the number of likes to the list of fields that will be retrieved.
     */
    withLikeCount(): AbstractMediaRequestConfigBuilder {
        this.fields.add(MediaField.LIKE_COUNT);
        return this;
    }

    /**
     * Adds the media type to the list of fields that will be retrieved.
     */
    withMediaType(): AbstractMediaRequestConfigBuilder {
        this.fields.add(MediaField.MEDIA_TYPE);
        return this;
    }

    /**
     * Adds the media url to the list of fields that will be retrieved.
     */
    withMediaUrl(): AbstractMediaRequestConfigBuilder {
        this.fields.add(MediaField.MEDIA_URL);
        return this;
    }

    /**
     * Adds the owner to the list of fields that will be retrieved.
     */
    withOwner(): AbstractMediaRequestConfigBuilder {
        this.fields.add(MediaField.OWNER);
        return this;
    }

    /**
     * Adds the permalink to the list of fields that will be retrieved.
     */
    withPermalink(): AbstractMediaRequestConfigBuilder {
        this.fields.add(MediaField.PERMALINK);
        return this;
    }

    /**
     * Adds the shortcode to the list of fields that will be retrieved.
     */
    withShortcode(): AbstractMediaRequestConfigBuilder {
        this.fields.add(MediaField.SHORTCODE);
        return this;
    }

    /**
     * Adds the thumbnail url to the list of fields that will be retrieved.
     */
    withThumbnailUrl(): AbstractMediaRequestConfigBuilder {
        this.fields.add(MediaField.THUMBNAIL_URL);
        return this;
    }

    /**
     * Adds the timestamp to the list of fields that will be retrieved.
     */
    withTimestamp(): AbstractMediaRequestConfigBuilder {
        this.fields.add(MediaField.TIMESTAMP);
        return this;
    }

    /**
     * Adds the username to the list of fields that will be retrieved.
     */
    withUsername(): AbstractMediaRequestConfigBuilder {
        this.fields.add(MediaField.USERNAME);
        return this;
    }

    /**
     * Adds all fields to the list of fields that will be retrieved.
     */
    withAllFields(): AbstractMediaRequestConfigBuilder {
        return this
            .withCaption()
            .withCommentsCount()
            .withId()
            .withIgId()
            .withIsCommentEnabled()
            .withLikeCount()
            .withMediaType()
            .withMediaUrl()
            .withOwner()
            .withPermalink()
            .withShortcode()
            .withThumbnailUrl()
            .withTimestamp()
            .withUsername();
    }
}