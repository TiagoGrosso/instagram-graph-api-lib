import { CreatedObjectIdResponse } from '../../../main/requests/common/CreatedObjectIdResponse';
import { TestConstants } from '../../TestConstants';

describe('CreatedObjectIdResponse', () => {
    const response: CreatedObjectIdResponse = new CreatedObjectIdResponse({ id: TestConstants.COMMENT_ID });

    it('Gets the id', () => {
        expect(response.getId()).toEqual(TestConstants.COMMENT_ID);
    });
});
