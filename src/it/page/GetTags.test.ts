import { getClient } from '../TestEnv';
import { PublicMediaField } from '../../main/Enums';
import { MediaData } from '../../main/requests/data/MediaData';

describe('GetTags', () => {
    it('Gets the page tags with all fields', async () => {
        const request = getClient().newGetTagsRequest();
        const result = await request.execute();

        const data: MediaData[] = result.getData();
        expect(data.length).toBeGreaterThan(0);
        const firstTag: MediaData = data[0];
        Object.values(PublicMediaField)
            .filter(
                (field) =>
                    ![
                        PublicMediaField.CHILDREN, // We don't know if it's a carousel
                        PublicMediaField.VIDEO_TITLE, // No longer returned
                    ].includes(field)
            )
            .forEach((field) => expect(firstTag[field]).toBeDefined());
    });

    Object.values(PublicMediaField)
        .filter(
            (field) => ![PublicMediaField.ID, PublicMediaField.CHILDREN, PublicMediaField.VIDEO_TITLE].includes(field)
        )
        .forEach((field) => {
            it(`Gets the page tags with only '${field}'`, async () => {
                const request = getClient().newGetTagsRequest(field);
                const result = await request.execute();

                const data: MediaData[] = result.getData();
                expect(data.length).toBeGreaterThan(0);
                const firstTag: MediaData = data[0];
                Object.values(PublicMediaField)
                    .filter(
                        (expectedField) =>
                            ![
                                field,
                                PublicMediaField.ID, // Always returned
                            ].includes(expectedField)
                    )
                    .forEach((expectedField) => expect(firstTag[expectedField]).toBeUndefined());

                expect(firstTag.id).toBeDefined();
                expect(firstTag[field]).toBeDefined();
            });
        });
});
