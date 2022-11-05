import { AbstractResponse } from '../AbstractResponse';
import { ContainerData, CONTAINER_STATUS_CODE } from '../data/ContainerData';

/**
 * Class that represents a response from a Get Container request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 1.1.0
 */
export class GetContainerResponse extends AbstractResponse<ContainerData> {
    /**
     * Gets the container id.
     *
     * @returns the container id.
     */
    public getContainerId(): string {
        return this.data.id;
    }

    /**
     * Gets the container status.
     *
     * @returns the container status.
     */
    public getContainerStatus(): string | undefined {
        return this.data.status;
    }

    /**
     * Gets the container status code.
     *
     * @returns the container status code.
     */
    public getContainerStatusCode(): CONTAINER_STATUS_CODE | undefined {
        return this.data.status_code;
    }
}
