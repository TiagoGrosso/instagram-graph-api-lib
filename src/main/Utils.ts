import { MediaField, PrivateMediaField, PublicMediaField } from './Enums';

/**
 * A set of utility functions.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.0.0
 */
export class Utils {
    /**
     * Gets all the media fields.
     *
     * @returns an array with all the media fields.
     */
    public static getAllMediaFields(): MediaField[] {
        return [...Object.values(PublicMediaField), ...Object.values(PrivateMediaField)];
    }
}
