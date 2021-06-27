import axios, { AxiosResponse } from 'axios';
import { Method, RequestConfig } from './RequestConfig';
import { AbstractResponse } from './AbstractResponse';
import { Constants } from '../Constants';
import { Params } from './Params';
import { ApiVersion, PageOption } from '../Enums';

/**
 * The type of the page option token used to add paging params to the request.
 */
export type PageOptionToken = { option: PageOption; value: string };

/**
 * Abstract class to represent requests to the Instagram Graph API.
 *
 * @param R the type of the response.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.2.0
 */
export abstract class AbstractRequest<R extends AbstractResponse<unknown>> {
    /**
     * The request params.
     */
    protected params: Params;

    /**
     * The API Version.
     */
    protected apiVersion?: ApiVersion;

    /**
     * The constructor.
     *
     * @param accessToken the access token.
     */
    constructor(accessToken: string, apiVersion?: ApiVersion) {
        this.params = {
            access_token: accessToken,
        };
        this.apiVersion = apiVersion;
    }

    /**
     * Builds the config of the request.
     *
     * @returns the request config.
     */
    public config(): RequestConfig {
        return {
            params: this.params,
            method: this.method(),
            url: this.url(),
            baseURL: `${Constants.API_URL}/${this.apiVersion ?? ''}`,
        };
    }

    /**
     * Executes the requests and returns a promise of the parsed response.
     *
     * @returns the promise of a parsed response.
     */
    public execute(): Promise<R> {
        return axios(this.config()).then((response) => {
            return this.parseResponse(response);
        });
    }

    /**
     * Adds a paging param to the request.
     *
     * @param pageOptionToken the page option token to create the param.
     *
     * @deprecated since `next.release`, use {@link AbstractRequest#withPaging} instead.
     */
    public addPaging(pageOptionToken: PageOptionToken): void {
        this.params.before = undefined;
        this.params.after = undefined;
        this.params[pageOptionToken.option] = pageOptionToken.value;
    }

    /**
     * Adds the range params to the request.
     *
     * @param since the since param.
     * @param until the until param.
     *
     * @deprecated since `next.release`, use {@link AbstractRequest#withRange} instead.
     */
    public addRange(since: Date, until: Date): void {
        this.params.since = since;
        this.params.until = until;
    }

    /**
     * Adds the limit param to the request.
     *
     * @param limit the number of objects to retrieve.
     *
     * @deprecated since `next.release`, use {@link AbstractRequest#withLimit} instead.
     */
    public addLimit(limit: number): void {
        this.params.limit = limit;
    }

    /**
     * Adds a paging param to the request.
     *
     * @param pageOptionToken the page option token to create the param.
     *
     * @returns this request, for use in chain invocation.
     */
    public withPaging(pageOptionToken: PageOptionToken): this {
        this.params.before = undefined;
        this.params.after = undefined;
        this.params[pageOptionToken.option] = pageOptionToken.value;
        return this;
    }

    /**
     * Adds the range params to the request.
     *
     * @param since the since param.
     * @param until the until param.
     *
     * @returns this request, for use in chain invocation.
     */
    public withRange(since: Date, until: Date): this {
        this.params.since = since;
        this.params.until = until;
        return this;
    }

    /**
     * Adds the limit param to the request.
     *
     * @param limit the number of objects to retrieve.
     *
     * @returns this request, for use in chain invocation.
     */
    public withLimit(limit: number): this {
        this.params.limit = limit;
        return this;
    }

    /**
     * Sets the API version that the request will use.
     *
     * @param apiVersion the API version to use.
     *
     * @returns this request, for use in chain invocation.
     */
    public withApiVersion(apiVersion: ApiVersion | undefined): this {
        this.apiVersion = apiVersion;
        return this;
    }

    /**
     * Parses the response into a response object.
     *
     * @param response the parsed response.
     */
    protected abstract parseResponse(response: AxiosResponse<unknown>): R;

    /**
     * Gets the url for the request.
     *
     * @returns the url for the request.
     */
    protected abstract url(): string;

    /**
     * Gets the method for the request.
     *
     * @returns the method for the request.
     */
    protected method(): Method {
        return 'GET';
    }
}
