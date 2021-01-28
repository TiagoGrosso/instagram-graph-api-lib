import { SimplePostMetric } from '../../../Enums';
import { AbstractGetMediaInsightsRequest } from './AbstractGetMediaInsightsRequest';

/**
 * A request that gets insights about a media object (of type 'Photo' or 'Video').
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export class GetSimplePostMediaInsightsRequest extends AbstractGetMediaInsightsRequest<SimplePostMetric> {
    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param mediaId the media object id (must be of type 'Photo' or 'Video').
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     */
    constructor(accessToken: string, mediaId: string, ...metrics: SimplePostMetric[]) {
        let metricsSet: Set<SimplePostMetric> =
            metrics.length > 0 ? new Set(metrics) : new Set(Object.values(SimplePostMetric));
        super(accessToken, mediaId, metricsSet);
    }
}
