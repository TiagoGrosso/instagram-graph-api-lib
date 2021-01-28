/**
 * Interface to represent the data regarding a Page.
 * 
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export interface PageInfoData {
    
    /**
     * The id of the page.
     */
    id: string;
    
    /**
     * The intragram id of the page.
     */
    ig_id?: string;
    
    /**
     * The biography of the page.
     */
    biography?: string;
    
    /**
     * The number of followers of the page.
     */
    followers_count?: number;
    
    /**
     * The number of follows of the page.
     */
    follows_count?: number;
    
    /**
     * The number of media objects on the page.
     */
    media_count?: number;
    
    /**
     * The name of the page.
     */
    name?: string;
    
    /**
     * The profile pic url of the page.
     */
    profile_picture_url?: string;
    
    /**
     * The username of the page.
     */
    username?: string;
}
