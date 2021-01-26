import axios, { AxiosResponse } from 'axios';
import { Method, RequestConfig } from './RequestConfig';
import { AbstractResponse } from './AbstractResponse';
import { Request } from './Request';
import { Constants } from '../Constants';
import { Params } from './Params';
import { PageOption } from '../Enums';

export type PageOptionToken = { option: PageOption; value: string };

export abstract class AbstractRequest<R extends AbstractResponse<any>> implements Request {
    protected params: Params;

    constructor(accessToken: string) {
        this.params = {
            access_token: accessToken,
        };
    }

    public config(): RequestConfig {
        return {
            params: this.params,
            method: this.method(),
            url: this.url(),
            baseURL: Constants.API_URL,
        };
    }

    public execute(): Promise<R> {
        return axios(this.config()).then((response) => {
            return this.parseResponse(response);
        });
    }

    public addPaging(pageOptionToken: PageOptionToken): void {
        this.params.before = undefined;
        this.params.after = undefined;
        this.params[pageOptionToken.option] = pageOptionToken.value;
    }

    public addRange(since: Date, until: Date): void {
        this.params.since = since;
        this.params.until = until;
    }

    protected abstract parseResponse(response: AxiosResponse<any>): R;

    protected abstract url(): string;

    protected method(): Method {
        return 'GET';
    }
}
