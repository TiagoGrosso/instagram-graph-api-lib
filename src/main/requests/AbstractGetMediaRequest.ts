import { MediaField } from '../Enums';
import { AbstractRequest } from './AbstractRequest';
import { AbstractResponse } from './AbstractResponse';

/**
 * Abstract class to represent requests related to media info.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.2.0
 */
export abstract class AbstractGetMediaRequest<T extends AbstractResponse<unknown>> extends AbstractRequest<T> {
    /**
     * The constructor.
     *
     * @param accessToken the access token.
     * @param fields the fields to retrieve from the API. If no field is specified, all are retrieved.
     */
    constructor(accessToken: string, ...fields: MediaField[]) {
        super(accessToken);
        const fieldsSet: Set<MediaField> = fields.length > 0 ? new Set(fields) : new Set(Object.values(MediaField));
        this.params.fields = Array.from(fieldsSet).join(',');
    }
}
