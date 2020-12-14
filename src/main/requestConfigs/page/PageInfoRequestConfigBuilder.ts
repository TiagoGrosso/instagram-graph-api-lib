import { UserField } from "../../Enums";
import { AbstractRequestConfigBuilder } from "../AbstractRequestConfigBuilder";
import { RequestConfig } from "../RequestConfig";

/**
 * Builder for Page Info Requests.
 * 
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export class PageInfoRequestConfigBuilder extends AbstractRequestConfigBuilder {

    /**
     * The id of the user.
     */
    userId: string 

    /**
     * The fields that should be retrieved from the page.
     */
    fields: Set<UserField> = new Set();

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
     * Builds the request config.
     */
    build(): RequestConfig {
        this.params.fields = Array.from(this.fields).join();
        return super.build();
    }

    /**
     * Adds the biography to the fields that will be retrieved.
     */
    withBiography(): PageInfoRequestConfigBuilder {
        this.fields.add(UserField.BIOGRAPHY);
        return this;
    }

    /**
     * Adds the ID to the fields that will be retrieved.
     */
    withId(): PageInfoRequestConfigBuilder {
        this.fields.add(UserField.ID);
        return this;
    }

    /**
     * Adds the instagram ID to the fields that will be retrieved.
     */
    withIgId(): PageInfoRequestConfigBuilder {
        this.fields.add(UserField.IG_ID);
        return this;
    }

    /**
     * Adds the number of followers to the fields that will be retrieved.
     */
    withFollowersCount(): PageInfoRequestConfigBuilder {
        this.fields.add(UserField.FOLLOWERS_COUNT);
        return this;
    }

    /**
     * Adds the number of follows to the fields that will be retrieved.
     */
    withFollowsCount(): PageInfoRequestConfigBuilder {
        this.fields.add(UserField.FOLLOWS_COUNT);
        return this;
    }

    /**
     * Adds the number of media to the fields that will be retrieved.
     */
    withMediaCount(): PageInfoRequestConfigBuilder {
        this.fields.add(UserField.MEDIA_COUNT);
        return this;
    }

    /**
     * Adds the name to the fields that will be retrieved.
     */
    withName(): PageInfoRequestConfigBuilder {
        this.fields.add(UserField.NAME);
        return this;
    }

    /**
     * Adds the profile pic url to the fields that will be retrieved.
     */
    withProfilePicUrl(): PageInfoRequestConfigBuilder {
        this.fields.add(UserField.PROFILE_PICTURE_URL);
        return this;
    }

    /**
     * Adds the username to the fields that will be retrieved.
     */
    withUsername(): PageInfoRequestConfigBuilder {
        this.fields.add(UserField.USERNAME);
        return this;
    }

    /**
     * Adds all fields to the list of fields that will be retrieved.
     */
    withAllFields(): PageInfoRequestConfigBuilder {
        return this
            .withBiography()
            .withId()
            .withIgId()
            .withFollowersCount()
            .withFollowsCount()
            .withMediaCount()
            .withName()
            .withProfilePicUrl()
            .withUsername();
    }
    
    /**
     * @inheritdoc
     */
    getPath(): string {
        return `/${this.userId}`;
    }
}
