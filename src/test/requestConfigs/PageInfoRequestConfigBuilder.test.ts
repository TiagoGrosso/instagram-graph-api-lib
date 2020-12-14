import { UserField } from '../../main/Enums';
import { PageInfoRequestConfigBuilder } from '../../main/requestConfigs/page/PageInfoRequestConfigBuilder';
import { RequestConfig } from '../../main/requestConfigs/RequestConfig';

it('Builds the default request config', () => {
    let requestConfig: RequestConfig = new PageInfoRequestConfigBuilder('token', 'id').build();

    expect(requestConfig.url).toEqual('/id');
    expect(requestConfig.params.access_token).toEqual('token');
    expect(requestConfig.params.fields).toEqual('');
});

it('Builds the request config with some fields', () => {
    let requestConfig: RequestConfig = new PageInfoRequestConfigBuilder('token', 'id')
        .withFollowsCount()
        .withMediaCount()
        .build();

    expect(requestConfig.params.fields).toEqual([UserField.FOLLOWS_COUNT, UserField.MEDIA_COUNT].join());
});

it('Builds the request config with all fields', () => {
    let requestConfig: RequestConfig = new PageInfoRequestConfigBuilder('token', 'id').withAllFields().build();

    let testArray: string[] = [];

    for (let userField in UserField) {
        testArray.push(userField.toLocaleLowerCase());
    }

    expect(requestConfig.params.fields).toEqual(testArray.join());
});
