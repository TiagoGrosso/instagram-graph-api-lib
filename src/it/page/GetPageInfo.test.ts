import { getClient, getPageId } from '../TestEnv';
import { PageField } from '../../main/Enums';

describe('GetPageInfo', () => {
    it('Gets the page info with all fields', async () => {
        const request = getClient().newGetPageInfoRequest();
        const result = await request.execute();
        Object.values(PageField).forEach((field) => expect(result.getData()[field]).toBeDefined());
        expect(result.getId()).toEqual(getPageId());
    });

    Object.values(PageField)
        .filter((field) => field != PageField.ID)
        .forEach((field) => {
            it(`Gets the page info with only '${field}'`, async () => {
                const request = getClient().newGetPageInfoRequest(field);
                const result = await request.execute();
                Object.values(PageField)
                    .filter(
                        (expectedField) =>
                            ![
                                field,
                                PageField.ID, // Always returned
                            ].includes(expectedField)
                    )
                    .forEach((expectedField) => expect(result.getData()[expectedField]).toBeUndefined());

                expect(result.getId()).toEqual(getPageId());
                expect(result.getData()[field]).toBeDefined();
            });
        });
});
