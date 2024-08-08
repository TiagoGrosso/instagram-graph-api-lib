import fetchMock from 'jest-fetch-mock';
import { ContainerField } from '../../../main/Enums';
import { GetContainerRequest } from '../../../main/requests/container/GetContainerRequest';
import { GetContainerResponse } from '../../../main/requests/container/GetContainerResponse';
import { TestConstants } from '../../TestConstants';

describe('GetContainerRequest', () => {
    const request: GetContainerRequest = new GetContainerRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.CONTAINER_ID,
        ContainerField.STATUS
    );
    const requestAllFields: GetContainerRequest = new GetContainerRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.CONTAINER_ID
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.CONTAINER_ID}`);
        expect(request.config().params.fields).toEqual(ContainerField.STATUS);
        expect(requestAllFields.config().params.fields).toEqual(Object.values(ContainerField).join(','));
    });

    fetchMock.mockOnce(
        JSON.stringify({
            id: TestConstants.CONTAINER_ID,
            status: TestConstants.CONTAINER_STATUS,
        })
    );

    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(
            new GetContainerResponse({ id: TestConstants.CONTAINER_ID, status: TestConstants.CONTAINER_STATUS })
        );
    });
});
