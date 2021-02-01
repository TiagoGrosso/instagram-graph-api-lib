import { AbstractGetHashtagMediaRequest } from './AbstractGetHashtagMediaRequest';

/**
 * A request that gets information about the top media of an hashtag.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.5.0
 */
export class GetHashtagTopMediaRequest extends AbstractGetHashtagMediaRequest {
    /**
     * @inheritdoc
     */
    protected url(): string {
        return `${super.url()}/top_media`;
    }
}
