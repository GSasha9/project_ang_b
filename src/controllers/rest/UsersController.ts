import { BodyParams, Controller, Get, Post, QueryParams } from '@tsed/common';
import { Returns } from '@tsed/schema';
import { UserModel } from 'src/models/UserModel.js';
import { UserService } from 'src/services/UserService.js';

@Controller('/users')
export class UsersController {
  constructor(private service: UserService) {}
  @Get('/')
  @Returns(200, UserModel)
  get(@QueryParams('email') email: string) {
    return this.service.getUserByEmail(email);
  }

  @Post('/')
  @Returns(201, UserModel)
  async create(@BodyParams() user: UserModel) {
    return this.service.create(user);
  }
}
