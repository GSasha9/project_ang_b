import { Controller } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { Get, Post, Returns } from "@tsed/schema";
import { BlogPostModel } from "src/models/BlogPostModel.js";
import { BlogPostService } from "src/services/BlogPostService.js";

@Controller('/blog')
export class BlogPostsController {
    constructor(private service: BlogPostService){}

    @Get('/')
    @Returns(200, BlogPostModel)
    @(Returns(404).Description('No posts found'))
    getAll() {
        return this.service.getAllPosts();
    }

    @Post('/')
    @Returns(201, BlogPostModel)
    @(Returns(400).Description('Invalid post data'))
    async createPost(@BodyParams() post:BlogPostModel) {
        return this.service.createPost(post)
    }

}