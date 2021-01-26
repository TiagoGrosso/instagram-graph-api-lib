import { AxiosResponse } from 'axios';
import { PostMetric, StoryMetric } from '../../../Enums';
import { AbstractRequest } from '../../AbstractRequest';
import { MediaInsightsResponse } from './MediaInsightsResponse';

export abstract class AbstractMediaInsightsRequest<
    T extends PostMetric | StoryMetric
> extends AbstractRequest<MediaInsightsResponse> {
    private mediaId: string;

    constructor(accessToken: string, mediaId: string, metrics: Set<T>) {
        super(accessToken);
        this.mediaId = mediaId;
        this.params.metric = Array.from(metrics).join(',');
    }

    protected url(): string {
        return `/${this.mediaId}/insights`;
    }

    protected parseResponse(response: AxiosResponse<any>): MediaInsightsResponse {
        return new MediaInsightsResponse(response.data);
    }
}
