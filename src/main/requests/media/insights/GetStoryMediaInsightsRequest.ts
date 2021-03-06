import { StoryMetric } from '../../../Enums';
import { AbstractGetMediaInsightsRequest } from './AbstractGetMediaInsightsRequest';

/**
 * A request that gets insights about a media object (of type 'Story').
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.2.0
 */
export class GetStoryMediaInsightsRequest extends AbstractGetMediaInsightsRequest<StoryMetric> {
    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param mediaId the media object id (must be of type 'Story').
     * @param metrics the metrics to retrieve from the API. If no metric is specified, all are retrieved.
     */
    constructor(accessToken: string, mediaId: string, ...metrics: StoryMetric[]) {
        const metricsSet: Set<StoryMetric> =
            metrics.length > 0 ? new Set(metrics) : new Set(Object.values(StoryMetric));
        super(accessToken, mediaId, metricsSet);
    }
}
