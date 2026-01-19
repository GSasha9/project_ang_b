import { Groups, Optional, Property, Required } from "@tsed/schema";

export class BlogPostModel {
    @Property()
    @Groups('!creation')
    id: string;

    @Required()
    postDate: Date;

    @Required()
    postTime: string;

    @Optional()
    img?: string | null;

    @Required()
    title: string;

    @Required()
    text: string;

    @Optional()
    authorId?: string | null;
}