import { getClient, getPageId } from '../TestEnv';
import { PrivateMediaField, PublicMediaField } from '../../main/Enums';
import { MediaData } from '../../main/requests/data/MediaData';

describe('GetPageMedia', () => {
    it('Gets the page media with all fields', async () => {
        const request = getClient().newGetPageMediaRequest();
        const result = await request.execute();

        const data: MediaData[] = result.getData();
        expect(data.length).toBeGreaterThan(0);
        const firstMedia: MediaData = data[0];
        Object.values(PublicMediaField)
            .filter(
                (field) =>
                    ![
                        PublicMediaField.CHILDREN, // We don't know if it's a carousel
                        PublicMediaField.VIDEO_TITLE, // No longer returned
                    ].includes(field)
            )
            .forEach((field) => expect(firstMedia[field]).toBeDefined());
        Object.values(PrivateMediaField)
            .filter(
                (field) =>
                    ![
                        PrivateMediaField.THUMBNAIL_URL, // We don't know if it's a video
                    ].includes(field)
            )
            .forEach((field) => {
                expect(firstMedia[field]).toBeDefined();
            });
        result.getMediaOwnerIds().forEach((id) => expect(id).toEqual(getPageId()));
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
                const firstMedia: MediaData = data[0];
                Object.values(PublicMediaField)
                    .filter(
                        (expectedField) =>
                            ![
                                field,
                                PublicMediaField.ID, // Always returned
                            ].includes(expectedField)
                    )
                    .forEach((expectedField) => expect(firstMedia[expectedField]).toBeUndefined());
                Object.values(PrivateMediaField)
                    .filter(
                        (expectedField) =>
                            ![
                                field,
                                PrivateMediaField.THUMBNAIL_URL, // Always returned
                            ].includes(expectedField)
                    )
                    .forEach((expectedField) => expect(firstMedia[expectedField]).toBeUndefined());

                expect(firstMedia.id).toBeDefined();
                expect(firstMedia[field]).toBeDefined();
            });
        });
});
