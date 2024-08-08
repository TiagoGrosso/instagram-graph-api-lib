import fetchMock from 'jest-fetch-mock';
import { CommentField } from '../../../../main/Enums';
import { GetMediaCommentsRequest } from '../../../../main/requests/media/comments/GetMediaCommentsRequest';
import { GetObjectCommentsResponse } from '../../../../main/requests/common/GetObjectCommentsResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetMediaCommentsRequest', () => {
    const request: GetMediaCommentsRequest = new GetMediaCommentsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID,
        CommentField.REPLIES,
        CommentField.USERNAME
    );
    const requestAllFields: GetMediaCommentsRequest = new GetMediaCommentsRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.MEDIA_ID
    );

    it('Builds the config', () => {
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.MEDIA_ID}/comments`);
        expect(request.config().params.fields).toEqual([CommentField.REPLIES, CommentField.USERNAME].join(','));
        expect(requestAllFields.config().params.fields).toEqual(Object.values(CommentField).join(','));
    });

    fetchMock.enableMocks();
    fetchMock.mockOnce(
        JSON.stringify({
            data: TestConstants.COMMENTS_DATA,
        })
    );
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(new GetObjectCommentsResponse({ data: TestConstants.COMMENTS_DATA }));
    });
});
