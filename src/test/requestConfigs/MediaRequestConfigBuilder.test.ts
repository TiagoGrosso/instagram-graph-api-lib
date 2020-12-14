import { MediaRequestConfigBuilder } from '../../main/requestConfigs/media/MediaRequestConfigBuilder';
import { RequestConfig } from '../../main/requestConfigs/RequestConfig';

describe('MediaRequestConfigBuilder', () => {
    it('Builds the default request config', () => {
        let requestConfig: RequestConfig = new MediaRequestConfigBuilder('token', 'id').build();

        expect(requestConfig.url).toEqual('/id');
        expect(requestConfig.params.access_token).toEqual('token');
        expect(requestConfig.params.fields).toEqual('');
    });
});
