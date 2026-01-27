import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { typeormConfig } from './config/typeorm.js';
import { UserEntity } from './entities/UserEntity.js';
import { BlogPostEntity } from './entities/BlogPostEntity.js';
import { BookEntity } from './entities/BookEntity.js';
import { UsersReadBookEntity } from './entities/UsersReadBookEntity.js';

export const AppDataSource = new DataSource({
  ...typeormConfig,
  entities: [UserEntity, BlogPostEntity, BookEntity, UsersReadBookEntity],
  migrations: ['src/migrations/*.ts'],
});
