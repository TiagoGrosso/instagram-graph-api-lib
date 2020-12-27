import { Constants } from '../Constants';
import { PageOption } from '../Enums';
import { Params } from './Params';
import { RequestConfig } from './RequestConfig';
/**
 * Abstract builder for request configs.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export abstract class AbstractRequestConfigBuilder {
    /**
     * The request params.
     */
    params: Params;

    // TODO Move to class PagedRequestConfigBuilder
    /**
     * The request page option token.
     */
    pageOptionToken?: { option: PageOption; value: string };

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     */
    constructor(accessToken: string) {
        this.params = {
            access_token: accessToken,
        };
    }

    /**
     * Adds a limit param to the request config.
     *
     * @param limit the limit param value.
     */
    withLimit(limit: number): AbstractRequestConfigBuilder {
        // TODO Move to class PagedRequestConfigBuilder
        this.params.limit = limit;
        return this;
    }

    /**
     * Adds a page option token param to the request config.
     *
     * @param pageOptionToken the page option token param value.
     */
    withPage(pageOptionToken: { option: PageOption; value: string }): AbstractRequestConfigBuilder {
        this.pageOptionToken = pageOptionToken;
        return this;
    }

    /**
     * Adds a since param to the request config.
     *
     * @param since the since param value.
     */
    withSince(since: Date): AbstractRequestConfigBuilder {
        this.params.since = since;
        return this;
    }

    /**
     * Adds an until param to the request config.
     *
     * @param until the until param value.
     */
    withUntil(until: Date): AbstractRequestConfigBuilder {
        this.params.until = until;
        return this;
    }

    /**
     * Builds the requiest config.
     */
    build(): RequestConfig {
        if (this.pageOptionToken != null) {
            this.params[this.pageOptionToken.option] = this.pageOptionToken.value;
        }
        return {
            method: 'GET',
            baseURL: Constants.API_URL,
            url: this.getPath(),
            params: this.params,
        };
    }

    /**
     * Gets the relative path for the request.
     */
    abstract getPath(): string;
}
