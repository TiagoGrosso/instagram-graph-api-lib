import { ManyIdsResponse } from '../../../main/requests/common/ManyIdsResponse';
import { Paging } from '../../../main/requests/data/Paging';
import { TestConstants } from '../../TestConstants';

describe('ManyIdsResponse', () => {
    const response: ManyIdsResponse = new ManyIdsResponse({
        data: [{ id: TestConstants.MEDIA_ID }, { id: TestConstants.COMMENT_ID }],
        paging: TestConstants.PAGING,
    });

    it('Gets the ids', () => {
        expect(response.getIds()).toEqual([TestConstants.MEDIA_ID, TestConstants.COMMENT_ID]);
    });

    it('Gets the paging', () => {
        expect(response.getPaging()).toEqual(new Paging(TestConstants.PAGING));
    });
});
