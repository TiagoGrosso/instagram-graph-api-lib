import { GetContentPublishingLimitResponse } from '../../../../main/requests/page/content_publishing_limit/GetContentPublishingLimitResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetContentPublishingLimitResponse', () => {
    const response: GetContentPublishingLimitResponse = new GetContentPublishingLimitResponse(
        TestConstants.CONTENT_PUBLISHING_LIMIT_DATA
    );
    const partialResponse: GetContentPublishingLimitResponse = new GetContentPublishingLimitResponse(
        TestConstants.CONTENT_PUBLISHING_LIMIT_DATA_PARTIAL
    );

    it('Gets the quota_usage', () => {
        expect(response.getQuotaUsage()).toEqual(TestConstants.CONTENT_PUBLISHING_LIMIT_DATA.quota_usage);
    });

    it('Gets the config', () => {
        expect(response.getConfig()).toEqual(TestConstants.CONTENT_PUBLISHING_LIMIT_DATA.config);
        expect(partialResponse.getConfig()).toBeUndefined();
    });

    it('Gets the quota_total', () => {
        expect(response.getQuotaTotal()).toEqual(TestConstants.CONTENT_PUBLISHING_LIMIT_DATA.config?.quota_total);
        expect(partialResponse.getQuotaTotal()).toBeUndefined();
    });

    it('Gets the quota_duration', () => {
        expect(response.getQuotaDuration()).toEqual(TestConstants.CONTENT_PUBLISHING_LIMIT_DATA.config?.quota_duration);
        expect(partialResponse.getQuotaDuration()).toBeUndefined();
    });
});
