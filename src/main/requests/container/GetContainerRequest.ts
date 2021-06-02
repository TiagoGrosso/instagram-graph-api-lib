import { AxiosResponse } from 'axios';
import { ContainerField } from '../../Enums';
import { AbstractRequest } from '../AbstractRequest';
import { ContainerData } from '../data/ContainerData';
import { GetContainerResponse } from './GetContainerResponse';

/**
 * A request that gets info about a container
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since `next.release`
 */
export class GetContainerRequest extends AbstractRequest<GetContainerResponse> {
    /**
     * The container id.
     */
    private containerId: string;

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param containerId the container id.
     * @param fields the set of container fields to retrieve from the API.
     */
    constructor(accessToken: string, containerId: string, ...fields: ContainerField[]) {
        super(accessToken);
        this.containerId = containerId;
        const fieldsSet: Set<string> = fields.length > 0 ? new Set(fields) : new Set(Object.values(ContainerField));
        this.params.fields = Array.from(fieldsSet).join(',');
    }

    /**
     * @inheritdoc
     */
    protected parseResponse(response: AxiosResponse<ContainerData>): GetContainerResponse {
        return new GetContainerResponse(response.data);
    }

    /**
     * @inheritdoc
     */
    protected url(): string {
        return `/${this.containerId}`;
    }
}
