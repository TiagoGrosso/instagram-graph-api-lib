import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Constants } from '../../../../main/Constants';
import { MetricPeriod } from '../../../../main/Enums';
import { AbstractGetPageTimedInsightsRequest } from '../../../../main/requests/page/insights/AbstractGetPageTimedInsightsRequest';
import { GetPageTimedInsightsResponse } from '../../../../main/requests/page/insights/GetPageTimedInsightsResponse';
import { TestConstants } from '../../../TestConstants';

describe('AbstractGetPageInsightsRequest', () => {
    class AbstractPageInsightsRequestImpl extends AbstractGetPageTimedInsightsRequest<any> {
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
                new GetPageTimedInsightsResponse({
                    data: TestConstants.SIMPLE_METRIC_DATA,
                    paging: TestConstants.PAGING,
                })
            );
        });
    });
});
