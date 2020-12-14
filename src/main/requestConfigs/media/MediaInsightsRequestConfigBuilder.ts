import { PostMetric, StoryMetric } from "../../Enums";
import { AbstractRequestConfigBuilder } from "../AbstractRequestConfigBuilder";

/**
 * Builder for media insights requests.
 */
export class MediaInsightsRequestConfigBuilder extends AbstractRequestConfigBuilder {

    /**
     * The id of the media object.
     */
    mediaId: string;

    /**
     * The constructor.
     * 
     * @param accessToken the access token. 
     * @param mediaId the id of the media object.
     * @param metrics the metrics to retrieve.
     */
    constructor(accessToken: string, mediaId: string, metrics: PostMetric[] | StoryMetric[]) {
        super(accessToken);
        this.mediaId = mediaId;
        this.params.metric = metrics.join();
    }

    /**
     * @inheritdoc
     */
    getPath(): string {
        return `/${this.mediaId}/insights`;
    }
}