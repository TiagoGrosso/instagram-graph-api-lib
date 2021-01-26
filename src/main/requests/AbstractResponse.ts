import { Response } from './Response';

export abstract class AbstractResponse<T> implements Response {
    data: T;

    constructor(data: T) {
        this.data = data;
    }

    public getData(): T {
        return this.data;
    }
}
