import fetchMock from 'jest-fetch-mock';
import { PageField } from '../../../../main/Enums';
import { GetPageInfoRequest } from '../../../../main/requests/page/info/GetPageInfoRequest';
import { GetPageInfoResponse } from '../../../../main/requests/page/info/GetPageInfoResponse';
import { TestConstants } from '../../../TestConstants';

describe('GetPageInfoRequest', () => {
    const request: GetPageInfoRequest = new GetPageInfoRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID,
        PageField.BIOGRAPHY,
        PageField.PROFILE_PICTURE_URL
    );
    const requestAllFields: GetPageInfoRequest = new GetPageInfoRequest(
        TestConstants.ACCESS_TOKEN,
        TestConstants.PAGE_ID
    );

    it('Builds the config', () => {
        const fields = `${PageField.BIOGRAPHY},${PageField.PROFILE_PICTURE_URL}`;

        expect(request.config().params.fields).toEqual(fields);
        expect(request.config().method).toEqual('GET');
        expect(request.config().url).toEqual(`/${TestConstants.PAGE_ID}`);
        expect(requestAllFields.config().params.fields).toEqual(Object.values(PageField).join(','));
    });

    fetchMock.mockOnce(JSON.stringify(TestConstants.PAGE_INFO_DATA));
    it('Parses the response', async () => {
        expect.assertions(1);
        const response = await request.execute();
        expect(response).toEqual(new GetPageInfoResponse(TestConstants.PAGE_INFO_DATA));
    });
});
