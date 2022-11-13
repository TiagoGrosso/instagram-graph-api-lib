import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { CreatedObjectIdResponse } from '../../../../main/requests/common/CreatedObjectIdResponse';
import { PostPageReelMediaRequest } from '../../../../main/requests/page/media/PostPageReelMediaRequest';
import { TestConstants } from '../../../TestConstants';

describe('PostPageReelMediaRequest.', () => {
    const request: PostPageReelMediaRequest = new PostPageReelMediaRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        TestConstants.MEDIA_URL,
        TestConstants.CAPTION,
        TestConstants.THUMB_OFFSET,
        TestConstants.SHARE_TO_FEED,
        TestConstants.LOCATION_ID
    );
    const requestBare: PostPageReelMediaRequest = new PostPageReelMediaRequest(
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
        expect(request.config().params.share_to_feed).toEqual(TestConstants.SHARE_TO_FEED);
        expect(request.config().params.location_id).toEqual(TestConstants.LOCATION_ID);
    });

    it('Adds params request config', () => {
        expect(requestBare.config().params.video_url).toEqual(TestConstants.MEDIA_URL);
        expect(requestBare.config().params.caption).toBeUndefined();
        expect(requestBare.config().params.location_id).toBeUndefined();
        expect(requestBare.config().params.share_to_feed).toBeUndefined();
        expect(requestBare.config().params.thumb_offset).toBeUndefined();

        requestBare.withCaption(TestConstants.CAPTION);
        requestBare.withLocationId(TestConstants.LOCATION_ID);
        requestBare.withThumbOffset(TestConstants.THUMB_OFFSET);
        requestBare.withShareToFeed(TestConstants.SHARE_TO_FEED);

        expect(requestBare.config().params.caption).toEqual(TestConstants.CAPTION);
        expect(requestBare.config().params.thumb_offset).toEqual(TestConstants.THUMB_OFFSET);
        expect(requestBare.config().params.location_id).toEqual(TestConstants.LOCATION_ID);
        expect(request.config().params.share_to_feed).toEqual(TestConstants.SHARE_TO_FEED);
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
