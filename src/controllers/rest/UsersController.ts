import { BodyParams, Controller, Get, Post, QueryParams } from '@tsed/common';
import { Returns } from '@tsed/schema';
import { UserModel } from 'src/models/UserModel.js';
import { UserService } from 'src/services/UserService.js';

@Controller('/users')
export class UsersController {
  constructor(private service: UserService) {}
  @Get('/')
  @Returns(200, UserModel)
  @(Returns(404).Description('User not found'))
  get(@QueryParams('email') email: string) {
    return this.service.getUserByEmail(email);
  }

  @Get('/')
  @Returns(200, UserModel)
  @(Returns(404).Description('User not found'))
  async getById(@QueryParams('id') id: number) {
    return this.service.getUserById(id);
  }

  @Post('/')
  @Returns(201, UserModel)
  @(Returns(409).Description('User already exists'))
  async create(@BodyParams() user: UserModel) {
    return this.service.create(user);
  }
}
