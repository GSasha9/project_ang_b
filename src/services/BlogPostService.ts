import { Injectable } from "@tsed/di";
import { AppDataSource } from "src/data-source.js";
import { BlogPostEntity } from "src/entities/BlogPostEntity.js";

@Injectable()
export class BlogPostService {
     dbBlogPosts = AppDataSource.getRepository(BlogPostEntity);

     getAllPosts () {
      return this.dbBlogPosts.find()
    }
}