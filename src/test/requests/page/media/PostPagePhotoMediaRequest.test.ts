import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { CreatedObjectIdResponse } from '../../../../main/requests/common/CreatedObjectIdResponse';
import { PostPagePhotoMediaRequest } from '../../../../main/requests/page/media/PostPagePhotoMediaRequest';
import { TestConstants } from '../../../TestConstants';

describe('PostPagePhotoMediaRequest.', () => {
    const request: PostPagePhotoMediaRequest = new PostPagePhotoMediaRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        TestConstants.MEDIA_URL,
        TestConstants.CAPTION,
        TestConstants.LOCATION_ID,
        [TestConstants.USER_TAG]
    );
    const requestBare: PostPagePhotoMediaRequest = new PostPagePhotoMediaRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        TestConstants.MEDIA_URL
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('POST');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/media`);
        expect(request.config().params.image_url).toEqual(TestConstants.MEDIA_URL);
        expect(request.config().params.caption).toEqual(TestConstants.CAPTION);
        expect(request.config().params.location_id).toEqual(TestConstants.LOCATION_ID);
        expect(request.config().params.user_tags).toEqual([TestConstants.USER_TAG]);
    });

    it('Adds params request config', () => {
        expect(requestBare.config().params.image_url).toEqual(TestConstants.MEDIA_URL);
        expect(requestBare.config().params.caption).toBeUndefined();
        expect(requestBare.config().params.location_id).toBeUndefined();
        expect(requestBare.config().params.user_tags).toBeUndefined();

        requestBare.withCaption(TestConstants.CAPTION);
        requestBare.withLocationId(TestConstants.LOCATION_ID);
        requestBare.withUserTags([TestConstants.USER_TAG]);

        expect(requestBare.config().params.caption).toEqual(TestConstants.CAPTION);
        expect(requestBare.config().params.location_id).toEqual(TestConstants.LOCATION_ID);
        expect(requestBare.config().params.user_tags).toEqual([TestConstants.USER_TAG]);
    });

    const mock = new MockAdapter(axios);
    mock.onPost(`${Constants.API_URL}/${TestConstants.PAGE_ID}/media`).reply(200, { id: TestConstants.CONTAINER_ID });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new CreatedObjectIdResponse({ id: TestConstants.CONTAINER_ID }));
        });
    });
});
