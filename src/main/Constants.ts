/**
 * Class containing Constants used throughout the project.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export class Constants {
    /**
     * The URL of the api.
     *
     * @deprecated Use {@link Constants.API_URL_FB} (instead
     */
    static readonly API_URL: string = 'https://graph.facebook.com';

    /**
     * The URL of the api when using Facebook Login.
     */
    static readonly API_URL_FB: string = 'https://graph.facebook.com';

    /**
     * The URL of the api when using Instagram Login.
     */
    static readonly API_URL_INSTA: string = 'https://graph.instagram.com';
}
