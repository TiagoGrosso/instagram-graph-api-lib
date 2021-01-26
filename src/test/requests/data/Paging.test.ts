import { Paging } from '../../../main/requests/data/Paging';
import { TestConstants } from '../../TestConstants';

describe('Paging', () => {
    let paging: Paging = new Paging(TestConstants.PAGING);

    it('Gets the paging data', () => {
        expect(paging.getPaging()).toEqual(TestConstants.PAGING);
    });
    it('Gets the cursors', () => {
        expect(paging.getCursors()).toEqual(TestConstants.PAGING.cursors);
    });
    it('Gets the previous page', () => {
        expect(paging.getPrevious()).toEqual(TestConstants.PAGING.previous);
    });
    it('Gets the next page', () => {
        expect(paging.getNext()).toEqual(TestConstants.PAGING.next);
    });
    it('Gets the object before', () => {
        expect(paging.getBefore()).toEqual(TestConstants.PAGING.cursors?.before);
    });
    it('Gets the object after', () => {
        expect(paging.getAfter()).toEqual(TestConstants.PAGING.cursors?.after);
    });

    let partialPaging: Paging = new Paging(TestConstants.NO_CURSORS_PAGING);

    it("Doesn't throw on undefined cursors", () => {
        expect(partialPaging.getBefore()).toBeUndefined();
        expect(partialPaging.getAfter()).toBeUndefined();
    });
});
