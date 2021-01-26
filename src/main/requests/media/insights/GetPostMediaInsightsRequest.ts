import { PostMetric } from '../../../Enums';
import { AbstractGetMediaInsightsRequest } from './AbstractGetMediaInsightsRequest';

export class GetPostMediaInsightsRequest extends AbstractGetMediaInsightsRequest<PostMetric> {
    constructor(accessToken: string, mediaId: string, ...metrics: PostMetric[]) {
        let metricsSet: Set<PostMetric> = metrics.length > 0 ? new Set(metrics) : new Set(Object.values(PostMetric));
        super(accessToken, mediaId, metricsSet);
    }
}
