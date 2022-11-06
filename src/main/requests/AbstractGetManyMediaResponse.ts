import { MediaProductType } from '../Enums';
import { AbstractResponse } from './AbstractResponse';
import { Children } from './data/Common';
import { MediaData } from './data/MediaData';

export class AbstractGetManyMediaResponse extends AbstractResponse<MediaData[]> {
    /**
     * Gets an array with the ids of all the media objects.
     *
     * @returns an array with the ids of all the media objects.
     */
    public getIds(): string[] {
        return this.data.map((elem) => elem.id);
    }

    /**
     * Gets an array with the children of the all the media objects.
     * If a media object does not have the 'children' field, 'undefined' is returned for that object.
     *
     * @returns an array with the children of the all the media objects.
     */
    public getChildren(): (Children | undefined)[] {
        return this.data.map((elem) => elem.children);
    }

    /**
     * Gets a map from the id of the media objects to their children.
     * If a media object does have not a the 'children' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the media objects to their 'children'.
     */
    public getChildrenMap(): Map<string, Children | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.children];
            })
        );
    }

    /**
     * Gets an array with the caption of the all the media objects.
     * If a media object does not have the 'caption' field, 'undefined' is returned for that object.
     *
     * @returns an array with the caption of the all the media objects.
     */
    public getCaptions(): (string | undefined)[] {
        return this.data.map((elem) => elem.caption);
    }

    /**
     * Gets a map from the id of the media objects to their caption.
     * If a media object does have not a the 'caption' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the media objects to their 'caption'.
     */
    public getCaptionsMap(): Map<string, string | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.caption];
            })
        );
    }

    /**
     * Gets an array with the comments count of the all the media objects.
     * If a media object does not have the 'comments_count' field, 'undefined' is returned for that object.
     *
     * @returns an array with the 'comments_count' of the all the media objects.
     */
    public getCommentsCount(): (number | undefined)[] {
        return this.data.map((elem) => elem.comments_count);
    }

    /**
     * Gets a map from the id of the media objects to their comments count.
     * If a media object does have not a the 'comments_count' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the media objects to whether their 'comments_count'.
     */
    public getCommentsCountMap(): Map<string, number | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.comments_count];
            })
        );
    }

    /**
     * Gets an array with the ig_id of the all the media objects.
     * If a media object does not have the 'like_count' field, 'undefined' is returned for that object.
     *
     * @returns an array with the ig_id of the all the media objects.
     */
    public getIgIds(): (string | undefined)[] {
        return this.data.map((elem) => elem.ig_id);
    }

    /**
     * Gets a map from the id of the media objects to their ig_id.
     * If a media object does not have the 'like_count' field, 'undefined' is returned for that object.
     *
     * @returns a map from the ig of the media objects to their 'ig_id'.
     */
    public getIgIdsMap(): Map<string, string | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.ig_id];
            })
        );
    }

    /**
     * Gets an array with the 'is_comment_enabled' of the all the media objects.
     * If a media object does not have the 'is_comment_enabled' field, 'undefined' is returned for that object.
     *
     * @returns an array with the 'is_comment_enabled' of the all the media objects.
     */
    public getCommentsEnabled(): (boolean | undefined)[] {
        return this.data.map((elem) => elem.is_comment_enabled);
    }

    /**
     * Gets a map from the id of the media objects to whether they have comments enabled.
     * If a media object does have not a the 'is_comment_enabled' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the media objects to whether they have comments enabled.
     */
    public getCommentsEnabledMap(): Map<string, boolean | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.is_comment_enabled];
            })
        );
    }

    /**
     * Gets an array with the like counts of the all the media objects.
     * If a media object does not have the 'like_count' field, 'undefined' is returned for that object.
     *
     * @returns an array with the like counts of the all the media objects.
     */
    public getLikes(): (number | undefined)[] {
        return this.data.map((elem) => elem.like_count);
    }

    /**
     * Gets a map from the id of the media objects to their like count.
     * If a media object does have not a the 'like_count' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the media objects to their 'like_count'.
     */
    public getLikesMap(): Map<string, number | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.like_count];
            })
        );
    }

    /**
     * Gets an array with the media types of the all the media objects.
     * If a media object does not have the 'media_type' field, 'undefined' is returned for that object.
     *
     * @returns an array with the media types of the all the media objects.
     */
    public getMediaTypes(): (string | undefined)[] {
        return this.data.map((elem) => elem.media_type);
    }

    /**
     * Gets a map from the id of the media objects to their media type.
     * If a media object does have not a the 'media_type' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the media objects to their 'media_type'.
     */
    public getMediaTypesMap(): Map<string, string | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.media_type];
            })
        );
    }

    /**
     * Gets an array with the media URLs of the all the media object.
     * If a media object does not have the 'media_url' field, 'undefined' is returned for that object.
     *
     * @returns an array with the media URLs of the all the media objects.
     */
    public getMediaUrls(): (string | undefined)[] {
        return this.data.map((elem) => elem.media_url);
    }

    /**
     * Gets a map from the id of the media objects to their media URL.
     * If a media object does have not a the 'media_url' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the media objects to their 'media_url'.
     */
    public getMediaUrlsMap(): Map<string, string | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.media_url];
            })
        );
    }

    /**
     * Gets an array with the media owner of the all the media object.
     * If a media object does not have the 'owner' field, 'undefined' is returned for that object.
     *
     * @returns an array with the media owner of the all the media objects.
     */
    public getMediaOwners(): ({ id: string } | undefined)[] {
        return this.data.map((elem) => elem.owner);
    }

    /**
     * Gets a map from the id of the media objects to their media owner.
     * If a media object does have not a the 'owner' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the media objects to their 'owner'.
     */
    public getMediaOwnersMap(): Map<string, { id: string } | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.owner];
            })
        );
    }

    /**
     * Gets an array with the id of media owner of the all the media objects.
     * If a media object does not have the 'owner' field, 'undefined' is returned for that object.
     *
     * @returns an array with the id of media owner of the all the media objects.
     */
    public getMediaOwnerIds(): (string | undefined)[] {
        return this.data.map((elem) => elem.owner?.id);
    }

    /**
     * Gets a map from the id of the media objects to the id of their media owner.
     * If a media object does have not a the 'owner' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the media objects to their 'owner.id'.
     */
    public getMediaOwnerIdsMap(): Map<string, string | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.owner?.id];
            })
        );
    }

    /**
     * Gets an array with the permalinks of the all the media objects.
     * If a media object does not have the 'permalink' field, 'undefined' is returned for that object.
     *
     * @returns an array with the permalinks of the all the media objects.
     */
    public getPermalinks(): (string | undefined)[] {
        return this.data.map((elem) => elem.permalink);
    }

    /**
     * Gets a map from the id of the media objects to their permalink.
     * If a media object does have not a the 'permalink' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the media objects to their 'permalink'.
     */
    public getPermalinksMap(): Map<string, string | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.permalink];
            })
        );
    }

    /**
     * Gets an array with the shortcodes of the all the media objects.
     * If a media object does not have the 'shortcode' field, 'undefined' is returned for that object.
     *
     * @returns an array with the shortcodes of the all the media objects.
     */
    public getShortcodes(): (string | undefined)[] {
        return this.data.map((elem) => elem.shortcode);
    }

    /**
     * Gets a map from the id of the media objects to their shortcode.
     * If a media object does have not a the 'shortcode' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the media objects to their 'shortcode'.
     */
    public getShortcodesMap(): Map<string, string | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.shortcode];
            })
        );
    }

    /**
     * Gets an array with the timestamps of the all the media objects.
     * If a media object does not have the 'timestamp' field, 'undefined' is returned for that object.
     *
     * @returns an array with the timestamps of the all the media objects.
     */
    public getTimestamps(): (Date | undefined)[] {
        return this.data.map((elem) => (elem.timestamp != undefined ? new Date(elem.timestamp) : undefined));
    }

    /**
     * Gets a map from the id of the media objects to their timestamp.
     * If a media object does have not a the 'timestamp' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the media objects to their 'timestamp'.
     */
    public getTimestampsMap(): Map<string, Date | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.timestamp != undefined ? new Date(elem.timestamp) : undefined];
            })
        );
    }

    /**
     * Gets an array with the usernames of the all the media objects.
     * If a media object does not have the 'username' field, 'undefined' is returned for that object.
     *
     * @returns an array with the usernames of the all the media objects.
     */
    public getUsernames(): (string | undefined)[] {
        return this.data.map((elem) => elem.username);
    }

    /**
     * Gets a map from the id of the media objects to their username.
     * If a media object does have not a the 'username' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the media objects to their 'username'.
     */
    public getUsernamesMap(): Map<string, string | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.username];
            })
        );
    }

    /**
     * Gets an array with the media product type of the all the media objects.
     * If a media object does not have the 'media_product_type' field, 'undefined' is returned for that object.
     *
     * @returns an array with the media product type of the all the media objects.
     */
    public getMediaProductTypes(): (MediaProductType | undefined)[] {
        return this.data.map((elem) => elem.media_product_type);
    }

    /**
     * Gets a map from the id of the media objects to their media product type.
     * If a media object does have not a the 'media_product_type' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the media objects to their 'media_product_type'.
     */
    public getMediaProductTypesMap(): Map<string, MediaProductType | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.media_product_type];
            })
        );
    }

    /**
     * Gets an array with the video titles of the all the media objects.
     * If a media object does not have the 'video_title' field, 'undefined' is returned for that object.
     *
     * @returns an array with the video titles of the all the media objects.
     *
     * @deprecated this is no longer returned when using the latest versions of the API.
     */
    public getVideoTitles(): (string | undefined)[] {
        return this.data.map((elem) => elem.video_title);
    }

    /**
     * Gets a map from the id of the media objects to their video title.
     * If a media object does have not a the 'video_title' field, 'undefined' is returned for that object.
     *
     * @returns a map from the id of the media objects to their 'video_title'.
     *
     * @deprecated this is no longer returned when using the latest versions of the API.
     */
    public getVideoTitlesMap(): Map<string, string | undefined> {
        return new Map(
            this.data.map((elem) => {
                return [elem.id, elem.video_title];
            })
        );
    }
}
