import { Params } from './Params';

/**
 * Type to represent request methods.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.2.0
 */
export type Method = 'GET' | 'POST';

/**
 * Interface to represent request configs.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export interface RequestConfig {
    method: Method;
    url: string;
    params: Params;
    baseURL?: string;
}
