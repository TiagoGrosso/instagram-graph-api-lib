import { AxiosResponse } from 'axios';
import { AbstractRequest } from '../../AbstractRequest';
import { GetMediaChildrenResponse } from './GetMediaChildrenResponse';

/**
 * A request that gets the children of an album media object.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.5.0
 */
export class GetMediaChildrenRequest extends AbstractRequest<GetMediaChildrenResponse> {
    /**
     * The id of the media object (must be an album).
     */
    private mediaId: string;

    /**
     * The constructor
     *
     * @param accessToken the access token.
     * @param mediaId the id of the media object (must be an album).
     */
    constructor(accessToken: string, mediaId: string) {
        super(accessToken);
        this.mediaId = mediaId;
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<never>): GetMediaChildrenResponse {
        return new GetMediaChildrenResponse(response.data);
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.mediaId}/children`;
    }
}
