import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { CreatedObjectIdResponse } from '../../../../main/requests/common/CreatedObjectIdResponse';
import { PostPageVideoMediaRequest } from '../../../../main/requests/page/media/PostPageVideoMediaRequest';
import { TestConstants } from '../../../TestConstants';

describe('PostPageVideoMediaRequest.', () => {
    const request: PostPageVideoMediaRequest = new PostPageVideoMediaRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        TestConstants.MEDIA_URL,
        TestConstants.CAPTION,
        TestConstants.THUMB_OFFSET,
        TestConstants.LOCATION_ID
    );
    const requestBare: PostPageVideoMediaRequest = new PostPageVideoMediaRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        TestConstants.MEDIA_URL
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('POST');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/media`);
        expect(request.config().params.video_url).toEqual(TestConstants.MEDIA_URL);
        expect(request.config().params.caption).toEqual(TestConstants.CAPTION);
        expect(request.config().params.thumb_offset).toEqual(TestConstants.THUMB_OFFSET);
        expect(request.config().params.location_id).toEqual(TestConstants.LOCATION_ID);
    });

    it('Adds params request config', () => {
        expect(requestBare.config().params.video_url).toEqual(TestConstants.MEDIA_URL);
        expect(requestBare.config().params.caption).toBeUndefined();
        expect(requestBare.config().params.location_id).toBeUndefined();
        expect(requestBare.config().params.thumb_offset).toBeUndefined();

        requestBare.withCaption(TestConstants.CAPTION);
        requestBare.withLocationId(TestConstants.LOCATION_ID);
        requestBare.withThumbOffset(TestConstants.THUMB_OFFSET);

        expect(requestBare.config().params.caption).toEqual(TestConstants.CAPTION);
        expect(requestBare.config().params.thumb_offset).toEqual(TestConstants.THUMB_OFFSET);
        expect(requestBare.config().params.location_id).toEqual(TestConstants.LOCATION_ID);
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
