import { GetHashtagRecentMediaRequest } from '../../../../main/requests/hashtag/media/GetHashtagRecentMediaRequest';
import { TestConstants } from '../../../TestConstants';

describe('GetHashtagRecentMediaRequest', () => {
    const request = new GetHashtagRecentMediaRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.HASHTAG_ID,
        TestConstants.PAGE_ID
    );

    it('Gets the URL', () => {
        expect(request.config().url).toEqual(`/${TestConstants.HASHTAG_ID}/recent_media`);
    });
});
