import { GetTagsResponse } from '../../../../main/requests/page/tags/GetTagsResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetTagsResponse', () => {
    const response = new GetTagsResponse({
        data: [TestConstants.FULL_MEDIA_DATA, TestConstants.BARE_MEDIA_DATA],
        paging: TestConstants.PAGING,
    });
    const responseNoCursors = new GetTagsResponse({
        data: [TestConstants.FULL_MEDIA_DATA, TestConstants.BARE_MEDIA_DATA],
        paging: TestConstants.NO_CURSORS_PAGING,
    });

    it('Gets the cursors', () => {
        expect(response.getCursors()).toEqual(TestConstants.PAGING.cursors);
        expect(responseNoCursors.getCursors()).toBeUndefined();
    });

    it('Gets the after cursor', () => {
        expect(response.getAfter()).toEqual(TestConstants.PAGING.cursors?.after);
        expect(responseNoCursors.getAfter()).toBeUndefined();
    });

    it('Gets the before cursor', () => {
        expect(response.getBefore()).toEqual(TestConstants.PAGING.cursors?.before);
        expect(responseNoCursors.getBefore()).toBeUndefined();
    });

    it('Handles missing paging', () => {
        const responseNoPaging = new GetTagsResponse({
            data: [TestConstants.FULL_MEDIA_DATA, TestConstants.BARE_MEDIA_DATA],
        });
        expect(responseNoPaging.getBefore()).toBeUndefined();
        expect(responseNoPaging.getAfter()).toBeUndefined();
    });
});
