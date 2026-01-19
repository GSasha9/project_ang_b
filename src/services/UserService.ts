import { Injectable } from '@tsed/di';
import { UserModel } from 'src/models/UserModel.js';
import { AppDataSource } from 'src/data-source.js';
import { UserEntity } from 'src/entities/UserEntity.js';
import { Conflict, NotFound } from '@tsed/exceptions';

@Injectable()
export class UserService {
  dbUsers = AppDataSource.getRepository(UserEntity);

  async getUserByEmail(email: string) {
    const existedUser = await this.dbUsers.findOneBy({
      email: email,
    });

    if (!existedUser) {
      throw new NotFound("User doesn't exist");
    }

    return existedUser;
  }

  async create(user: UserModel) {
    const newUser: Partial<UserEntity> = {
      name: user.name,
      email: user.email,
      password: user.password,
    };

    const existedUser = await this.dbUsers.findOneBy({
      email: newUser.email,
    });

    if (existedUser) {
      throw new Conflict('user already registered');
    }

    const savedUser = await this.dbUsers.save(newUser);

    return {
      id: savedUser.id,
      name: savedUser.name,
      email: savedUser.email,
    };
  }
}
