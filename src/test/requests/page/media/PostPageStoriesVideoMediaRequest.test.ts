import fetchMock from 'jest-fetch-mock';
import { CreatedObjectIdResponse } from '../../../../main/requests/common/CreatedObjectIdResponse';
import { PostPageStoriesPhotoMediaRequest } from '../../../../main/requests/page/media/PostPageStoriesPhotoMediaRequest';
import { TestConstants } from '../../../TestConstants';

describe('PostPageStoriesPhotoMediaRequest.', () => {
    const request: PostPageStoriesPhotoMediaRequest = new PostPageStoriesPhotoMediaRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        TestConstants.MEDIA_URL
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('POST');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/media`);
        expect(request.config().params.image_url).toEqual(TestConstants.MEDIA_URL);
    });

    fetchMock.mockOnce(JSON.stringify({ id: TestConstants.CONTAINER_ID }));
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(new CreatedObjectIdResponse({ id: TestConstants.CONTAINER_ID }));
    });
});
