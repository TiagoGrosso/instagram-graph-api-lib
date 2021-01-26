import { AxiosResponse } from 'axios';
import { PostMetric, StoryMetric } from '../../../Enums';
import { AbstractRequest } from '../../AbstractRequest';
import { GetMediaInsightsResponse } from './GetMediaInsightsResponse';

export abstract class AbstractGetMediaInsightsRequest<
    T extends PostMetric | StoryMetric
> extends AbstractRequest<GetMediaInsightsResponse> {
    private mediaId: string;

    constructor(accessToken: string, mediaId: string, metrics: Set<T>) {
        super(accessToken);
        this.mediaId = mediaId;
        this.params.metric = Array.from(metrics).join(',');
    }

    protected url(): string {
        return `/${this.mediaId}/insights`;
    }

    protected parseResponse(response: AxiosResponse<any>): GetMediaInsightsResponse {
        return new GetMediaInsightsResponse(response.data);
    }
}
