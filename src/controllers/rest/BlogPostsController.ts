import { Controller } from "@tsed/di";
import { Get, Returns } from "@tsed/schema";
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

}