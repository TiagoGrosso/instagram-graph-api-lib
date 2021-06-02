import { GetContainerResponse } from '../../../main/requests/container/GetContainerResponse';
import { TestConstants } from '../../TestConstants';

describe('GetContainerResponse', () => {
    const response = new GetContainerResponse({
        id: TestConstants.CONTAINER_ID,
        status: TestConstants.CONTAINER_STATUS,
        status_code: TestConstants.CONTAINER_STATUS_CODE,
    });

    it('Gets the container id', () => {
        expect(response.getContainerId()).toEqual(TestConstants.CONTAINER_ID);
    });

    it('Gets the container status', () => {
        expect(response.getContainerStatus()).toEqual(TestConstants.CONTAINER_STATUS);
    });

    it('Gets the container status code', () => {
        expect(response.getContainerStatusCode()).toEqual(TestConstants.CONTAINER_STATUS_CODE);
    });
});
