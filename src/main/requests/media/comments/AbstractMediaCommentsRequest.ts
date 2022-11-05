import { AbstractRequest } from '../../AbstractRequest';
import { AbstractResponse } from '../../AbstractResponse';

/**
 * Abstract class to represent requests related to a media's comments.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.5.0
 */
export abstract class AbstractMediaCommentsRequest<T extends AbstractResponse<unknown>> extends AbstractRequest<T> {
    /**
     * The id of the media object.
     */
    private readonly mediaId: string;

    /**
     * The constructor.
     *
     * @param accessToken The access token.
     * @param mediaId the id of the media object.
     */
    protected constructor(accessToken: string, mediaId: string) {
        super(accessToken);
        this.mediaId = mediaId;
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.mediaId}/comments`;
    }
}
