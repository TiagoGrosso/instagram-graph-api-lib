import { AbstractGetHashtagMediaRequest } from './AbstractGetHashtagMediaRequest';

/**
 * A request that gets information about the recent media of an hashtag.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.5.0
 */
export class GetHashtagRecentMediaRequest extends AbstractGetHashtagMediaRequest {
    /**
     * @inheritdoc
     */
    protected url(): string {
        return `${super.url()}/recent_media`;
    }
}
