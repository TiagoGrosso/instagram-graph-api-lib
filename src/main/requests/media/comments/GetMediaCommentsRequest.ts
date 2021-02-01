import { AxiosResponse } from 'axios';
import { AbstractMediaCommentsRequest } from './AbstractMediaCommentsRequest';
import { GetMediaCommentsResponse } from './GetMediaCommentsResponse';

/**
 * A request that gets the comments of a media object.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export class GetMediaCommentsRequest extends AbstractMediaCommentsRequest<GetMediaCommentsResponse> {
    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<never>): GetMediaCommentsResponse {
        return new GetMediaCommentsResponse(response.data);
    }
}
