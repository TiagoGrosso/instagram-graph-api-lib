import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { PostMediaInsightsRequest } from '../../../../main/requests/media/insights/PostMediaInsightsRequest';
import { MediaInsightsResponse } from '../../../../main/requests/media/insights/MediaInsightsResponse';
import { TestConstants } from '../../../TestConstants';
import { PostMetric } from '../../../../main/Enums';

describe('PostMediaInsightsRequest', () => {
    let request = new PostMediaInsightsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID,
        PostMetric.IMPRESSIONS,
        PostMetric.ENGAGEMENT
    );
    let allFieldsRequest = new PostMediaInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID);

    it('Builds the config', () => {
        expect(request.config().params.metric).toEqual([PostMetric.IMPRESSIONS, PostMetric.ENGAGEMENT].join(','));
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.MEDIA_ID}/insights`);
        expect(allFieldsRequest.config().params.metric).toEqual(Object.values(PostMetric).join(','));
    });

    let mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.MEDIA_ID}/insights`).reply(200, {
        data: TestConstants.SIMPLE_METRIC_DATA,
    });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new MediaInsightsResponse({ data: TestConstants.SIMPLE_METRIC_DATA }));
        });
    });
});
