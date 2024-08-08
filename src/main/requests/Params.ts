import { MediaType } from './page/media/AbstractPostPageMediaRequest';

/**
 * Represents a user tag in a media object.
 */
export type UserTag = {
    username: string;
    x: number;
    y: number;
};

/**
 * Interface to represent the params of a request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export interface Params {
    access_token: string;
    fields?: string;
    limit?: number;
    before?: string;
    after?: string;
    metric?: string;
    period?: string;
    since?: Date | number;
    until?: Date;
    user_id?: string;
    q?: string;
    message?: string;
    hide?: boolean;
    image_url?: string;
    caption?: string;
    user_tags?: UserTag[];
    thumb_offset?: number;
    video_url?: string;
    media_type?: MediaType;
    is_carousel?: boolean;
    children?: string[];
    /**
     * Not obtainable through this API. https://developers.facebook.com/docs/instagram-api/reference/ig-user/media
     */
    location_id?: string;
    creation_id?: string;
    share_to_feed?: boolean;
}

export function paramsToURLSearchParams(params: Params): URLSearchParams {
    const urlParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value) {
            urlParams.set(key, value.toString());
        }
    });

    return urlParams;
}
