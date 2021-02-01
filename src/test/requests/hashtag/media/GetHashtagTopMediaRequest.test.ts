import { GetHashtagTopMediaRequest } from '../../../../main/requests/hashtag/media/GetHashtagTopMediaRequest';
import { TestConstants } from '../../../TestConstants';

describe('GetHashtagTopMediaRequest', () => {
    const request = new GetHashtagTopMediaRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.HASHTAG_ID,
        TestConstants.PAGE_ID
    );

    it('Gets the URL', () => {
        expect(request.config().url).toEqual(`/${TestConstants.HASHTAG_ID}/top_media`);
    });
});
