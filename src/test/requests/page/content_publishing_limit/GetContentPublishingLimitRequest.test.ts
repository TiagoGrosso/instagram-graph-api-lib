import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { ContentPublishingLimitFields } from '../../../../main/Enums';
import { GetContentPublishingLimitRequest } from '../../../../main/requests/page/content_publishing_limit/GetContentPublishingLimitRequest';
import { GetContentPublishingLimitResponse } from '../../../../main/requests/page/content_publishing_limit/GetContentPublishingLimitResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetContentPublishingLimitRequest', () => {
    const request: GetContentPublishingLimitRequest = new GetContentPublishingLimitRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        ContentPublishingLimitFields.QUOTA_USAGE
    );
    const requestAllFields: GetContentPublishingLimitRequest = new GetContentPublishingLimitRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID
    );

    it('Builds the config', () => {
        expect(request.config().params.fields).toEqual(ContentPublishingLimitFields.QUOTA_USAGE);
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/content_publishing_limit`);
        expect(requestAllFields.config().params.fields).toEqual(Object.values(ContentPublishingLimitFields).join(','));
    });

    const mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.PAGE_ID}/content_publishing_limit`).reply(200, {
        data: TestConstants.CONTENT_PUBLISHING_LIMIT_DATA,
    });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(
                new GetContentPublishingLimitResponse(TestConstants.CONTENT_PUBLISHING_LIMIT_DATA)
            );
        });
    });
});
