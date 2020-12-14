import { PageMediaRequestConfigBuilder } from '../../main/requestConfigs/page/PageMediaRequestConfigBuilder';
import { RequestConfig } from '../../main/requestConfigs/RequestConfig';
import { TestConstants } from '../TestConstants';

describe('PageMediaRequestConfigBuilder', () => {
    it('Builds the default request config', () => {
        let requestConfig: RequestConfig = new PageMediaRequestConfigBuilder(
            TestConstants.ACCESS_TOKEN,
            TestConstants.PAGE_ID
        ).build();

        expect(requestConfig.url).toEqual(`/${TestConstants.PAGE_ID}/media`);
        expect(requestConfig.params.access_token).toEqual(TestConstants.ACCESS_TOKEN);
        expect(requestConfig.params.fields).toEqual('');
    });
});
