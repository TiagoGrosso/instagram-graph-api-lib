import { MediaField } from '../Enums';
import { AbstractRequest } from './AbstractRequest';
import { AbstractResponse } from './AbstractResponse';

export abstract class AbstractGetMediaRequest<T extends AbstractResponse<any>> extends AbstractRequest<T> {
    constructor(accessToken: string, ...fields: MediaField[]) {
        super(accessToken);
        let fieldsSet: Set<MediaField> = fields.length > 0 ? new Set(fields) : new Set(Object.values(MediaField));
        this.params.fields = Array.from(fieldsSet).join(',');
    }
}
