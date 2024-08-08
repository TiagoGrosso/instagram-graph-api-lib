import fetchMock from 'jest-fetch-mock';
import { MetricPeriod } from '../../../../main/Enums';
import { AbstractGetPageTimedInsightsRequest } from '../../../../main/requests/page/insights/AbstractGetPageTimedInsightsRequest';
import { GetPageTimedInsightsResponse } from '../../../../main/requests/page/insights/GetPageTimedInsightsResponse';
import { TestConstants } from '../../../TestConstants';

describe('AbstractGetPageInsightsRequest', () => {
    class AbstractPageInsightsRequestImpl extends AbstractGetPageTimedInsightsRequest<never> {
        protected period(): MetricPeriod {
            return MetricPeriod.DAY;
        }
        constructor() {
            super(TestConstants.ACCESS_TOKEN, TestConstants.PAGE_ID, new Set());
        }
    }

    const request: AbstractPageInsightsRequestImpl = new AbstractPageInsightsRequestImpl();

    fetchMock.enableMocks();
    fetchMock.mockOnce(
        JSON.stringify({
            data: TestConstants.SIMPLE_METRIC_DATA,
            paging: TestConstants.PAGING,
        })
    );
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(
            new GetPageTimedInsightsResponse({
                data: TestConstants.SIMPLE_METRIC_DATA,
                paging: TestConstants.PAGING,
            })
        );
    });
});
