import { AlbumMetric } from '../../../Enums';
import { AbstractGetMediaInsightsRequest } from './AbstractGetMediaInsightsRequest';

/**
 * A request that gets insights about a media object (of type 'Album').
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.2.0
 */
export class GetAlbumMediaInsightsRequest extends AbstractGetMediaInsightsRequest<AlbumMetric> {
    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param mediaId the media object id (must be of type 'Photo' or 'Video').
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     */
    constructor(accessToken: string, mediaId: string, ...metrics: AlbumMetric[]) {
        let metricsSet: Set<AlbumMetric> = metrics.length > 0 ? new Set(metrics) : new Set(Object.values(AlbumMetric));
        super(accessToken, mediaId, metricsSet);
    }
}
