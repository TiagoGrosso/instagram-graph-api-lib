import { AxiosResponse } from 'axios';
import { AlbumMetric, SimplePostMetric, StoryMetric } from '../../../Enums';
import { AbstractRequest } from '../../AbstractRequest';
import { GetMediaInsightsResponse } from './GetMediaInsightsResponse';

/**
 * An abstract class to represent request that gets insights about a media object.
 *
 * @param T te type of metrics. This matches the type of media object (Post or Story).
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.2.0
 */
export abstract class AbstractGetMediaInsightsRequest<
    T extends SimplePostMetric | StoryMetric | AlbumMetric
> extends AbstractRequest<GetMediaInsightsResponse> {
    /**
     * The media object id.
     */
    private mediaId: string;

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param mediaId the media object id (must be of type 'Post').
     * @param metrics the metrics to retrieve from the API.
     */
    constructor(accessToken: string, mediaId: string, metrics: Set<T>) {
        super(accessToken);
        this.mediaId = mediaId;
        this.params.metric = Array.from(metrics).join(',');
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.mediaId}/insights`;
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<never>): GetMediaInsightsResponse {
        return new GetMediaInsightsResponse(response.data);
    }
}
