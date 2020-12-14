import { RequestConfig } from './../../main/requestConfigs/RequestConfig'
import { TestConstants } from "../TestConstants";
import { Constants } from '../../main/Constants';
import { AbstractRequestConfigBuilder } from '../../main/requestConfigs/AbstractRequestConfigBuilder';

describe('AbstractRequestConfigBuilder.test.ts', () => {
    class AbstractRequestConfigBuilderImpl extends AbstractRequestConfigBuilder {
        getPath(): string {
            return TestConstants.PATH;
        }
    }

    it('Creates a default request', () => {
        let requestConfig: RequestConfig = new AbstractRequestConfigBuilderImpl(TestConstants.ACCESS_TOKEN).build();

        expect(requestConfig.baseURL).toEqual(Constants.API_URL);
        expect(requestConfig.url).toEqual(TestConstants.PATH);
        expect(requestConfig.params.access_token).toEqual(TestConstants.ACCESS_TOKEN);
        expect(requestConfig.params.after).toBeUndefined();
        expect(requestConfig.params.before).toBeUndefined();
        expect(requestConfig.params.fields).toBeUndefined();
        expect(requestConfig.params.limit).toBeUndefined();
        expect(requestConfig.params.metric).toBeUndefined();
        expect(requestConfig.params.period).toBeUndefined();
        expect(requestConfig.params.since).toBeUndefined();
        expect(requestConfig.params.until).toBeUndefined();
    });

    it('Adds a limit to the request config', () => {
        let requestConfig: RequestConfig = new AbstractRequestConfigBuilderImpl(TestConstants.ACCESS_TOKEN)
            .withLimit(TestConstants.LIMIT)
            .build();

        expect(requestConfig.baseURL).toEqual(Constants.API_URL);
        expect(requestConfig.url).toEqual(TestConstants.PATH);
        expect(requestConfig.params.access_token).toEqual(TestConstants.ACCESS_TOKEN);
        expect(requestConfig.params.after).toBeUndefined();
        expect(requestConfig.params.before).toBeUndefined();
        expect(requestConfig.params.fields).toBeUndefined();
        expect(requestConfig.params.limit).toEqual(TestConstants.LIMIT);
        expect(requestConfig.params.metric).toBeUndefined();
        expect(requestConfig.params.period).toBeUndefined();
        expect(requestConfig.params.since).toBeUndefined();
        expect(requestConfig.params.until).toBeUndefined();
    });

    it('Adds a since date to the request config', () => {
        let requestConfig: RequestConfig = new AbstractRequestConfigBuilderImpl(TestConstants.ACCESS_TOKEN)
            .withSince(TestConstants.SINCE)
            .build();

        expect(requestConfig.baseURL).toEqual(Constants.API_URL);
        expect(requestConfig.url).toEqual(TestConstants.PATH);
        expect(requestConfig.params.access_token).toEqual(TestConstants.ACCESS_TOKEN);
        expect(requestConfig.params.after).toBeUndefined();
        expect(requestConfig.params.before).toBeUndefined();
        expect(requestConfig.params.fields).toBeUndefined();
        expect(requestConfig.params.limit).toBeUndefined();
        expect(requestConfig.params.metric).toBeUndefined();
        expect(requestConfig.params.period).toBeUndefined();
        expect(requestConfig.params.since).toEqual(TestConstants.SINCE);
        expect(requestConfig.params.until).toBeUndefined();
    });

    it('Adds an until date to the request config', () => {
        let requestConfig: RequestConfig = new AbstractRequestConfigBuilderImpl(TestConstants.ACCESS_TOKEN)
            .withUntil(TestConstants.UNTIL)
            .build();

        expect(requestConfig.baseURL).toEqual(Constants.API_URL);
        expect(requestConfig.url).toEqual(TestConstants.PATH);
        expect(requestConfig.params.access_token).toEqual(TestConstants.ACCESS_TOKEN);
        expect(requestConfig.params.after).toBeUndefined();
        expect(requestConfig.params.before).toBeUndefined();
        expect(requestConfig.params.fields).toBeUndefined();
        expect(requestConfig.params.limit).toBeUndefined();
        expect(requestConfig.params.metric).toBeUndefined();
        expect(requestConfig.params.period).toBeUndefined();
        expect(requestConfig.params.since).toBeUndefined();
        expect(requestConfig.params.until).toEqual(TestConstants.UNTIL);
    });

    it('Adds a before page option token to the request config', () => {
        let requestConfig: RequestConfig = new AbstractRequestConfigBuilderImpl(TestConstants.ACCESS_TOKEN)
            .withPage(TestConstants.BEFORE_PAGE)
            .build();

        expect(requestConfig.baseURL).toEqual(Constants.API_URL);
        expect(requestConfig.url).toEqual(TestConstants.PATH);
        expect(requestConfig.params.access_token).toEqual(TestConstants.ACCESS_TOKEN);
        expect(requestConfig.params.after).toBeUndefined();
        expect(requestConfig.params.before).toEqual(TestConstants.BEFORE_PAGE.value);
        expect(requestConfig.params.fields).toBeUndefined();
        expect(requestConfig.params.limit).toBeUndefined();
        expect(requestConfig.params.metric).toBeUndefined();
        expect(requestConfig.params.period).toBeUndefined();
        expect(requestConfig.params.since).toBeUndefined();
        expect(requestConfig.params.until).toBeUndefined();
    });

    it('Adds an after page option token to the request config', () => {
        let requestConfig: RequestConfig = new AbstractRequestConfigBuilderImpl(TestConstants.ACCESS_TOKEN)
            .withPage(TestConstants.AFTER_PAGE)
            .build();

        expect(requestConfig.baseURL).toEqual(Constants.API_URL);
        expect(requestConfig.url).toEqual(TestConstants.PATH);
        expect(requestConfig.params.access_token).toEqual(TestConstants.ACCESS_TOKEN);
        expect(requestConfig.params.after).toEqual(TestConstants.AFTER_PAGE.value);
        expect(requestConfig.params.before).toBeUndefined();
        expect(requestConfig.params.fields).toBeUndefined();
        expect(requestConfig.params.limit).toBeUndefined();
        expect(requestConfig.params.metric).toBeUndefined();
        expect(requestConfig.params.period).toBeUndefined();
        expect(requestConfig.params.since).toBeUndefined();
        expect(requestConfig.params.until).toBeUndefined();
    });
});
