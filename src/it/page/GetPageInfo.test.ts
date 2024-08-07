import { getClient, getPageId } from '../TestEnv';
import { PageField } from '../../main/Enums';

describe('GetPageInfo', () => {
    it('Gets the page info with all fields', async () => {
        const request = getClient().newGetPageInfoRequest();
        const result = await request.execute();
        Object.values(PageField).forEach((field) => expect(result.getData()[field]).toBeDefined());
        expect(result.getId()).toEqual(getPageId());
    });

    const fields = Object.values(PageField).filter((field) => field != PageField.ID);
    it.each(fields)(`Gets the page info with only '$s'`, async (field) => {
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
