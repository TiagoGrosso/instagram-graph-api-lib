import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { GetSimplePostMediaInsightsRequest } from '../../../../main/requests/media/insights/GetSimplePostMediaInsightsRequest';
import { GetMediaInsightsResponse } from '../../../../main/requests/media/insights/GetMediaInsightsResponse';
import { TestConstants } from '../../../TestConstants';
import { SimplePostMetric } from '../../../../main/Enums';

describe('GetSimplePostMediaInsightsRequest', () => {
    let request = new GetSimplePostMediaInsightsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID,
        SimplePostMetric.IMPRESSIONS,
        SimplePostMetric.ENGAGEMENT
    );
    let allFieldsRequest = new GetSimplePostMediaInsightsRequest(TestConstants.ACCESS_TOKEN, TestConstants.MEDIA_ID);

    it('Builds the config', () => {
        expect(request.config().params.metric).toEqual(
            [SimplePostMetric.IMPRESSIONS, SimplePostMetric.ENGAGEMENT].join(',')
        );
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.MEDIA_ID}/insights`);
        expect(allFieldsRequest.config().params.metric).toEqual(Object.values(SimplePostMetric).join(','));
    });

    let mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.MEDIA_ID}/insights`).reply(200, {
        data: TestConstants.SIMPLE_METRIC_DATA,
    });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(new GetMediaInsightsResponse({ data: TestConstants.SIMPLE_METRIC_DATA }));
        });
    });
});
