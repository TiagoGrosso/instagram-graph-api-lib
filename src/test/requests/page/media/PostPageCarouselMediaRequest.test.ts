import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { CreatedObjectIdResponse } from '../../../../main/requests/common/CreatedObjectIdResponse';
import { PostPageCarouselMediaRequest } from '../../../../main/requests/page/media/PostPageCarouselMediaRequest';
import { TestConstants } from '../../../TestConstants';

describe('PostPageCaroulselMediaRequest.', () => {
    const request: PostPageCarouselMediaRequest = new PostPageCarouselMediaRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        TestConstants.ID_ARRAY,
        TestConstants.CAPTION,
        TestConstants.LOCATION_ID
    );
    let requestBare: PostPageCarouselMediaRequest;

    beforeEach(() => {
        requestBare = new PostPageCarouselMediaRequest(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID);
    });

    it('Builds the config', () => {
        expect(request.config().method).toEqual('POST');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/media`);
        expect(request.config().params.children).toEqual(TestConstants.ID_ARRAY);
        expect(request.config().params.caption).toEqual(TestConstants.CAPTION);
        expect(request.config().params.location_id).toEqual(TestConstants.LOCATION_ID);
    });
    it('Adds params to the request config', () => {
        expect(requestBare.config().params.caption).toBeUndefined();
        expect(requestBare.config().params.location_id).toBeUndefined();
        expect(requestBare.config().params.children).toBeUndefined();

        requestBare.withCaption(TestConstants.CAPTION);
        requestBare.withLocationId(TestConstants.LOCATION_ID);
        requestBare.withChildren(TestConstants.ID_ARRAY);

        expect(request.config().params.children).toEqual(TestConstants.ID_ARRAY);
        expect(requestBare.config().params.caption).toEqual(TestConstants.CAPTION);
        expect(requestBare.config().params.location_id).toEqual(TestConstants.LOCATION_ID);
    });
    it('Adds children to the request config', () => {
        expect(requestBare.config().params.children).toBeUndefined();
        const anotherChild = 'addedChild';
        requestBare.addChildren(anotherChild);
        expect(requestBare.config().params.children).toEqual([anotherChild]);

        const yetAnotherChild = 'secondChild';
        requestBare.addChildren(yetAnotherChild);
        expect(requestBare.config().params.children).toEqual([anotherChild, yetAnotherChild]);
    });

    it('Removes children from the request config', () => {
        expect(requestBare.config().params.children).toBeUndefined();
        requestBare.removeChildren(TestConstants.ID_ARRAY[0]);
        expect(requestBare.config().params.children).toBeUndefined();

        request.removeChildren(TestConstants.ID_ARRAY[0]);
        expect(request.config().params.children).toEqual(TestConstants.ID_ARRAY.slice(1));
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
