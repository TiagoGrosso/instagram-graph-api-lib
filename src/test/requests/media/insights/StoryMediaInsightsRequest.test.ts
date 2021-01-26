import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { StoryMetric } from '../../../../main/Enums';
import { MediaInsightsResponse } from '../../../../main/requests/media/insights/MediaInsightsResponse';
import { StoryMediaInsightsRequest } from '../../../../main/requests/media/insights/StoryMediaInsightsRequest';
import { TestConstants } from '../../../TestConstants';

describe('StoryMediaInsightsRequest', () => {
    let request = new StoryMediaInsightsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID,
        StoryMetric.IMPRESSIONS,
        StoryMetric.TAPS_BACK
    );
    let allFieldsRequest = new StoryMediaInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID);

    it('Builds the config', () => {
        expect(request.config().params.metric).toEqual([StoryMetric.IMPRESSIONS, StoryMetric.TAPS_BACK].join(','));
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.MEDIA_ID}/insights`);
        expect(allFieldsRequest.config().params.metric).toEqual(Object.values(StoryMetric).join(','));
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
