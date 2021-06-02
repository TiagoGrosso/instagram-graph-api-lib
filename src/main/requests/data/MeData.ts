/**
 * Interface to represent the data regarding a Get Me Request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.0.0
 */
export interface MeData {
    /**
     * The instagram business account.
     */
    instagram_business_account?: { id: string };
    /**
     * The page id.
     */
    id: string;
}
