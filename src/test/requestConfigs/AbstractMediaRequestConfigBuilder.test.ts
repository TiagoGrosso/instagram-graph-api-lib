import { Constants } from '../../main/Constants';
import { MediaField } from '../../main/Enums';
import { AbstractMediaRequestConfigBuilder } from '../../main/requestConfigs/AbstractMediaRequestConfigBuilder';
import { RequestConfig } from '../../main/requestConfigs/RequestConfig';
import { TestConstants } from '../TestConstants';

describe('AbstractMediaRequestConfigBuilder.ts', () => {
    class AbstractRequestConfigBuilderImpl extends AbstractMediaRequestConfigBuilder {
        getPath(): string {
            return TestConstants.PATH;
        }
    }

    it('Creates a default request', () => {
        let requestConfig: RequestConfig = new AbstractRequestConfigBuilderImpl(TestConstants.ACCESS_TOKEN).build();

        expect(requestConfig.baseURL).toEqual(Constants.API_URL);
        expect(requestConfig.url).toEqual(TestConstants.PATH);
        expect(requestConfig.params.access_token).toEqual(TestConstants.ACCESS_TOKEN);
        expect(requestConfig.params.fields).toEqual('');
    });

    it('Creates a request one field', () => {
        let requestConfig: RequestConfig = new AbstractRequestConfigBuilderImpl(TestConstants.ACCESS_TOKEN)
            .withCaption()
            .build();

        expect(requestConfig.params.fields).toEqual(MediaField.CAPTION);
    });

    it('Creates a request with multiple fields', () => {
        let requestConfig: RequestConfig = new AbstractRequestConfigBuilderImpl(TestConstants.ACCESS_TOKEN)
            .withMediaUrl()
            .withOwner()
            .build();

        expect(requestConfig.params.fields).toEqual([MediaField.MEDIA_URL, MediaField.OWNER].join());
    });

    it('Creates a request with all fields', () => {
        let requestConfig: RequestConfig = new AbstractRequestConfigBuilderImpl(TestConstants.ACCESS_TOKEN)
            .withAllFields()
            .build();

        let testArray: string[] = [];

        for (let mediaField in MediaField) {
            testArray.push(mediaField.toLocaleLowerCase());
        }

        expect(requestConfig.params.fields).toEqual(testArray.join());
    });
});
