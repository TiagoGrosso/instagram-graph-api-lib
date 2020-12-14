import { Params } from "./Params";

export interface RequestConfig {
    url: string;
    params: Params;
    baseURL?: string;   
}