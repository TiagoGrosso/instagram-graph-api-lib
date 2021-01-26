import { RequestConfig } from './RequestConfig';
import { Response } from './Response';

export interface Request {
    config(): RequestConfig;

    execute(): Promise<Response>;
}
