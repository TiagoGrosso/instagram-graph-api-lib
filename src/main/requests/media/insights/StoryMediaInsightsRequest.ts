import { StoryMetric } from '../../../Enums';
import { AbstractMediaInsightsRequest } from './AbstractMediaInsightsRequest';

export class StoryMediaInsightsRequest extends AbstractMediaInsightsRequest<StoryMetric> {
    constructor(accessToken: string, mediaId: string, ...metrics: StoryMetric[]) {
        let metricsSet: Set<StoryMetric> = metrics.length > 0 ? new Set(metrics) : new Set(Object.values(StoryMetric));
        super(accessToken, mediaId, metricsSet);
    }
}
