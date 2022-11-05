import { AbstractPostPageMediaRequest, MediaType } from './AbstractPostPageMediaRequest';

/**
 * A request that creates a new Carousel Media container.
 *
 * @author Tiago Grosso <tiagogrosso99@gmail.com>
 * @since 3.0.0
 */
export class PostPageCarouselMediaRequest extends AbstractPostPageMediaRequest {
    /**
     * The constructor
     *
     * @param accessToken the access token.
     * @param pageId the page id.
     * @param children the video URL.
     * @param caption the caption.
     * @param locationId the location id.
     */
    constructor(accessToken: string, pageId: string, children?: string[], caption?: string, locationId?: string) {
        super(accessToken, pageId, caption, locationId);
        this.params.children = children;
    }

    /**
     * Sets the children param in the request.
     *
     * @param children the children.
     *
     * @returns this object, for chained invocation.
     */
    public withChildren(children: string[]): this {
        this.params.children = children;
        return this;
    }

    /**
     * Adds children to the children param in the request.
     *
     * @param children the children to add.
     *
     * @returns this object, for chained invocation.
     */
    public addChildren(...children: string[]): this {
        this.params.children = (this.params.children ?? []).concat(children);
        return this;
    }

    /**
     * Removes children from the children param in the request.
     *
     * @param children the children to remove.
     *
     * @returns this object, for chained invocation.
     */
    public removeChildren(...children: string[]): this {
        this.params.children = this.params.children?.filter((child) => !children.includes(child));
        return this;
    }

    /**
     * @inheritdoc
     */
    protected mediaType(): MediaType {
        return MediaType.CAROUSEL;
    }
}
