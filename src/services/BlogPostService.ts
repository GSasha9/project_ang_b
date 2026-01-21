import { Injectable } from '@tsed/di';
import { AppDataSource } from 'src/data-source.js';
import { BlogPostEntity } from 'src/entities/BlogPostEntity.js';
import { UserEntity } from 'src/entities/UserEntity.js';
import { BlogPostModel } from 'src/models/BlogPostModel.js';

@Injectable()
export class BlogPostService {
  dbBlogPosts = AppDataSource.getRepository(BlogPostEntity);

  async getAllPosts() {
    const posts = await this.dbBlogPosts.find({
      relations: ['author'],
    });

    return posts;
  }

  async createPost(post: BlogPostModel) {
    const user = post.authorId
      ? await AppDataSource.getRepository(UserEntity).findOneBy({ id: post.authorId })
      : null;

    const newPost: Partial<BlogPostEntity> = {
      postDate: post.postDate,
      postTime: post.postTime,
      img: post.img || null || undefined,
      title: post.title,
      text: post.text,
      authorId: post.authorId || null,
      author: user,
    };
    return await this.dbBlogPosts.save(newPost);
  }
}
