import { PostMetric } from '../../../Enums';
import { AbstractMediaInsightsRequest } from './AbstractMediaInsightsRequest';

export class PostMediaInsightsRequest extends AbstractMediaInsightsRequest<PostMetric> {
    constructor(accessToken: string, mediaId: string, ...metrics: PostMetric[]) {
        let metricsSet: Set<PostMetric> = metrics.length > 0 ? new Set(metrics) : new Set(Object.values(PostMetric));
        super(accessToken, mediaId, metricsSet);
    }
}
