/**
 * Interface to represent the params of a request.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.1.0
 */
export interface Params {
    access_token: string;
    fields?: string;
    limit?: number;
    before?: string;
    after?: string;
    metric?: string;
    period?: string;
    since?: Date;
    until?: Date;
    user_id?: string;
    q?: string;
    message: string;
}
