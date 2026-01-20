import { Injectable } from "@tsed/di";
import { AppDataSource } from "src/data-source.js";
import { BlogPostEntity } from "src/entities/BlogPostEntity.js";
import { BlogPostModel } from "src/models/BlogPostModel.js";

@Injectable()
export class BlogPostService {
     dbBlogPosts = AppDataSource.getRepository(BlogPostEntity);

     getAllPosts () {
      return this.dbBlogPosts.find()
    }

    async createPost (post: BlogPostModel) {
      const newPost: Partial<BlogPostEntity> = {
        postDate: post.postDate,
        postTime: post.postTime,
        img: post.img || null || undefined,
        title: post.title,
        text: post.text
      }
      return await this.dbBlogPosts.save(newPost)
    }
}