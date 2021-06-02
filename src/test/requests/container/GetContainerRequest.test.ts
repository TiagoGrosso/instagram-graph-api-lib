import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../main/Constants';
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

    const mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.CONTAINER_ID}`).reply(200, {
        id: TestConstants.CONTAINER_ID,
        status: TestConstants.CONTAINER_STATUS,
    });

    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(
                new GetContainerResponse({ id: TestConstants.CONTAINER_ID, status: TestConstants.CONTAINER_STATUS })
            );
        });
    });
});
