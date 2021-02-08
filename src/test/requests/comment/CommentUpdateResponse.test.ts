import { CommentUpdateResponse } from '../../../main/requests/comment/CommentUpdateResponse';

describe('CommentUpdateResponse', () => {
    const response: CommentUpdateResponse = new CommentUpdateResponse({
        success: true,
    });
    it('Gets whether it was successful', () => {
        expect(response.wasSuccessful()).toEqual(true);
    });
});
