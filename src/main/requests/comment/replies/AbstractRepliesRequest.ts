import { AbstractResponse } from '../../AbstractResponse';
import { AbstractCommentRequest } from '../AbstractCommentRequest';

/**
 * Abstract class for request related to comment replies.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 0.7.0
 */
export abstract class AbstractRepliesRequest<T extends AbstractResponse<unknown>> extends AbstractCommentRequest<T> {
    /**
     * @inheritdoc
     */
    protected url(): string {
        return `${super.url()}/replies`;
    }
}
