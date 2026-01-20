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
    @Property(String)
    img?: string | null;

    @Required()
    title: string;

    @Required()
    text: string;

    @Optional()
    @Property(Number)
    authorId?: number | null

    @Optional()
    author?: {
        id: number,
        email: string,
        name: string
    } | null
    
}