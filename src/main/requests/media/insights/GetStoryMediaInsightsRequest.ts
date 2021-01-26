import { StoryMetric } from '../../../Enums';
import { AbstractGetMediaInsightsRequest } from './AbstractGetMediaInsightsRequest';

export class GetStoryMediaInsightsRequest extends AbstractGetMediaInsightsRequest<StoryMetric> {
    constructor(accessToken: string, mediaId: string, ...metrics: StoryMetric[]) {
        let metricsSet: Set<StoryMetric> = metrics.length > 0 ? new Set(metrics) : new Set(Object.values(StoryMetric));
        super(accessToken, mediaId, metricsSet);
    }
}
