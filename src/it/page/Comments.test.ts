import { CommentField } from '../../main/Enums';
import { CommentData } from '../../main/requests/data/CommentData';
import { getClient, getPublishedComment, getPublishedMedia, getReplyComment } from '../TestEnv';
import { v4 as uuidv4 } from 'uuid';

/*
 * Tests comment related requests.
 * These tests are very coupled (😔) and to ensure they work they have to be all run in sequence (😔😔)
 * Running the "post" ones once should allow others to then be run until other media gets published.
 *
 * It kinda sucks but the alternatives are:
 * - These tests not covering as much as they do
 * - A harder setup for devs picking up this project for the first time
 */
describe('Comments', () => {
    it('Posts a comment', async () => {
        const selectedMedia = await getPublishedMedia();
        const comment = uuidv4();
        const request = getClient().newPostMediaCommentRequest(selectedMedia, comment);

        const result = await request.execute();
        expect(result.getId()).toBeDefined();
    });

    it('Posts a reply', async () => {
        const parentComment = await getPublishedComment();
        const reply = uuidv4();
        const request = getClient().newPostReplyRequest(parentComment, reply);

        const result = await request.execute();
        expect(result.getId()).toBeDefined();
    });

    it('Gets page media comments with all the fields', async () => {
        const selectedMedia = await getPublishedMedia();
        const request = getClient().newGetMediaCommentsRequest(selectedMedia);

        const result = await request.execute();
        const first: CommentData = result.getData()[0];

        expect(first).toBeDefined();

        Object.values(CommentField)
            .filter((field) => field != CommentField.PARENT_ID)
            .forEach((field) => {
                expect(first[field]).toBeDefined();
            });
        expect(first.id).toBeDefined();
        expect(result.getIds()).toContainEqual(await getPublishedComment());
    });

    const fields = Object.values(CommentField).filter(
        (field) => ![CommentField.ID, CommentField.PARENT_ID].includes(field)
    );
    it.each(fields)(`Gets page media comments with only $s`, async (field) => {
        const selectedMedia = await getPublishedMedia();
        const request = getClient().newGetMediaCommentsRequest(selectedMedia, field);

        const result = await request.execute();
        const first: CommentData = result.getData()[0];

        Object.values(CommentField)
            .filter(
                (expectedField) =>
                    ![
                        field,
                        CommentField.ID, // Always returned
                    ].includes(expectedField)
            )
            .forEach((expectedField) => expect(first[expectedField]).toBeUndefined());

        expect(first.id).toBeDefined();
        expect(first[field]).toBeDefined();
    });

    it('Gets comment with all the fields', async () => {
        const comment = await getPublishedComment();
        const request = getClient().newGetCommentRequest(comment);

        const result = await request.execute().then((res) => res.getData());

        expect(result).toBeDefined();
        Object.values(CommentField)
            .filter((field) => field != CommentField.PARENT_ID)

            .forEach((field) => {
                expect(result[field]).toBeDefined();
            });
        expect(result.id).toEqual(comment);
        expect(result.replies!.data.map((reply) => reply.id)).toContain(await getReplyComment());
    });

    it.each(fields)(`Gets comment with only $s`, async (field) => {
        const comment = await getPublishedComment();
        const request = getClient().newGetCommentRequest(comment, field);

        const result = await request.execute().then((res) => res.getData());

        Object.values(CommentField)
            .filter(
                (expectedField) =>
                    ![
                        field,
                        CommentField.ID, // Always returned
                    ].includes(expectedField)
            )
            .forEach((expectedField) => expect(result[expectedField]).toBeUndefined());

        expect(result.id).toBeDefined();
        expect(result[field]).toBeDefined();
    });

    it('Gets reply parent id', async () => {
        const reply = await getReplyComment();
        const request = getClient().newGetCommentRequest(reply, CommentField.PARENT_ID);

        const result = await request.execute();

        expect(result).toBeDefined();
        expect(result.getParentId()).toEqual(await getPublishedComment());
    });
});
