import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { MetricPeriod } from '../../../../main/Enums';
import { AbstractPageInsightsTimeLimitedRequest } from '../../../../main/requests/page/insights/AbstractPageInsightsTimeLimitedRequest';
import { PageInsightsTimeLimitedMetricResponse } from '../../../../main/requests/page/insights/PageInsightsTimeLimitedMetricResponse';
import { TestConstants } from '../../../TestConstants';

describe('AbstractPageInsightsRequest', () => {
    class AbstractPageInsightsRequestImpl extends AbstractPageInsightsTimeLimitedRequest<any> {
        protected getPeriod(): MetricPeriod {
            return MetricPeriod.DAY;
        }
        constructor() {
            super(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID, new Set());
        }
    }

    let request: AbstractPageInsightsRequestImpl = new AbstractPageInsightsRequestImpl();

    let mock = new MockAdapter(axios);
    mock.onGet(`${Constants.API_URL}/${TestConstants.PAGE_ID}/insights`).reply(200, {
        data: TestConstants.SIMPLE_METRIC_DATA,
        paging: TestConstants.PAGING,
    });
    it('Parses the response', () => {
        expect.assertions(1);
        return request.execute().then((response) => {
            expect(response).toEqual(
                new PageInsightsTimeLimitedMetricResponse({
                    data: TestConstants.SIMPLE_METRIC_DATA,
                    paging: TestConstants.PAGING,
                })
            );
        });
    });
});
