import { GetMediaChildrenResponse } from '../../../../main/requests/media/children/GetMediaChildrenResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetMediaChildrenResponse', () => {
    const response = new GetMediaChildrenResponse({ data: TestConstants.CHILDREN_DATA });

    it('Gets the ids', () => {
        expect(response.getIds().sort()).toEqual([
            TestConstants.CHILDREN_DATA[0].id,
            TestConstants.CHILDREN_DATA[1].id,
            TestConstants.CHILDREN_DATA[2].id,
        ]);
    });
});
