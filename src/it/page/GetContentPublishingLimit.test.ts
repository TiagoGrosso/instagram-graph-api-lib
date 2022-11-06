import { getClient } from '../TestEnv';
import { ContentPublishingLimitFields } from '../../main/Enums';

describe('GetContentPublishingLimit.test', () => {
    it('Gets the content publishing limit with all fields', async () => {
        const request = getClient().newGetContentPublishingLimitRequest();
        const result = await request.execute();
        Object.values(ContentPublishingLimitFields).forEach((field) => {
            expect(result.getData()[field]).toBeDefined();
        });
    });

    Object.values(ContentPublishingLimitFields).forEach((field) => {
        it(`Gets the content publishing limit with only '${field}'`, async () => {
            const request = getClient().newGetContentPublishingLimitRequest(field);
            const result = await request.execute();
            Object.values(ContentPublishingLimitFields)
                .filter((expectedField) => field != expectedField)
                .forEach((expectedField) => expect(result.getData()[expectedField]).toBeUndefined());
            expect(result.getData()[field]).toBeDefined();
        });
    });

    it("Accepts the 'since' param", async () => {
        const request = getClient().newGetContentPublishingLimitRequest();
        const date = new Date();
        date.setHours(date.getHours() - 1);
        request.since(date);
        const result = await request.execute();
        Object.values(ContentPublishingLimitFields).forEach((field) => {
            expect(result.getData()[field]).toBeDefined();
        });
    });
});
