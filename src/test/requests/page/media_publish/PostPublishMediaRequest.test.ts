import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { CreatedObjectIdResponse } from '../../../../main/requests/common/CreatedObjectIdResponse';
import { PostPublishMediaRequest } from '../../../../main/requests/page/media_publish/PostPublishMediaRequest';
import { TestConstants } from '../../../TestConstants';

describe('PostPublishMediaRequest', () => {
    const request: PostPublishMediaRequest = new PostPublishMediaRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        TestConstants.CONTAINER_ID
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('POST');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/media_publish`);
        expect(request.config().params.creation_id).toEqual(TestConstants.CONTAINER_ID);
    });

    const mock = new MockAdapter(axios);
    mock.onPost(`${Constants.API_URL}/${TestConstants.PAGE_ID}/media_publish`).reply(200, {
        id: TestConstants.MEDIA_ID,
    });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new CreatedObjectIdResponse({ id: TestConstants.MEDIA_ID }));
        });
    });
});
