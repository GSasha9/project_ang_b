import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { typeormConfig } from './config/typeorm.js';
import { UserEntity } from './entities/UserEntity.js';
import { BlogPostEntity } from './entities/BlogPostEntity.js';

export const AppDataSource = new DataSource({
  ...typeormConfig,
  entities: [UserEntity, BlogPostEntity],
  migrations: ['src/migrations/*.ts'],
});
