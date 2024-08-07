import fetchMock from 'jest-fetch-mock';
import { GetMediaChildrenRequest } from '../../../../main/requests/media/children/GetMediaChildrenRequest';
import { GetMediaChildrenResponse } from '../../../../main/requests/media/children/GetMediaChildrenResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetMediaCommentsRequest', () => {
    const request: GetMediaChildrenRequest = new GetMediaChildrenRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.MEDIA_ID}/children`);
    });

    fetchMock.mockOnce(
        JSON.stringify({
            data: TestConstants.CHILDREN_DATA,
        })
    );
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(new GetMediaChildrenResponse({ data: TestConstants.CHILDREN_DATA }));
    });
});
