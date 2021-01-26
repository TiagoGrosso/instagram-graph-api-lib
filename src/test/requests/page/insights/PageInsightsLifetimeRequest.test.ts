import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { LifetimeMetric, MetricPeriod } from '../../../../main/Enums';
import { PageInsightsLifetimeMetricResponse } from '../../../../main/requests/page/insights/PageInsightsLifetimeMetricResponse';
import { PageInsightsLifetimeRequest } from '../../../../main/requests/page/insights/PageInsightsLifetimeRequest';
import { TestConstants } from '../../../TestConstants';

describe('PageInsightsLifetimeRequest', () => {
    let request: PageInsightsLifetimeRequest = new PageInsightsLifetimeRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        LifetimeMetric.AUDIENCE_CITY,
        LifetimeMetric.AUDIENCE_GENDER_AGE
    );
    let allFieldsRequest: PageInsightsLifetimeRequest = new PageInsightsLifetimeRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID
    );

    it('Builds the config', () => {
        expect(request.config().params.metric).toEqual(
            [LifetimeMetric.AUDIENCE_CITY, LifetimeMetric.AUDIENCE_GENDER_AGE].join(',')
        );
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}/insights`);
        expect(request.config().params.period).toEqual(MetricPeriod.LIFETIME);
        expect(allFieldsRequest.config().params.metric).toEqual(Object.values(LifetimeMetric).join(','));
    });

    let mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.PAGE_ID}/insights`).reply(200, {
        data: TestConstants.COMPLEX_METRIC_DATA,
    });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(
                new PageInsightsLifetimeMetricResponse({
                    data: TestConstants.COMPLEX_METRIC_DATA,
                })
            );
        });
    });
});
