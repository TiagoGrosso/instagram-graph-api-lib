import axios, { AxiosResponse } from 'axios';
import { Method, RequestConfig } from './RequestConfig';
import { AbstractResponse } from './AbstractResponse';
import { Constants } from '../Constants';
import { Params } from './Params';
import { PageOption } from '../Enums';

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
 * @since `next.release`
 */
export abstract class AbstractRequest<R extends AbstractResponse<any>> {
    /**
     * The request params.
     */
    protected params: Params;

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
     * Builds the config of the request.
     *
     * @returns the request config.
     */
    public config(): RequestConfig {
        return {
            params: this.params,
            method: this.method(),
            url: this.url(),
            baseURL: Constants.API_URL,
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
     */
    public addRange(since: Date, until: Date): void {
        this.params.since = since;
        this.params.until = until;
    }

    /**
     * Parses the response into a response object.
     *
     * @param response the parsed response.
     */
    protected abstract parseResponse(response: AxiosResponse<any>): R;

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
