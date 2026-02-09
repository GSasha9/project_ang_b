import { Controller } from '@tsed/di';
import { BodyParams, QueryParams } from '@tsed/platform-params';
import { Get, Post, Returns } from '@tsed/schema';
import { UsersReadBooksModel } from 'src/models/UsersReadBookModel.js';
import { BookService } from 'src/services/BookService.js';

@Controller('/pricing')
export class BookController {
  constructor(private service: BookService) {}

  @Get('/')
  @Returns(200, UsersReadBooksModel)
  @(Returns(404).Description('There are no read books yet'))
  async getBooksByUserId(@QueryParams('userId', Number) userId: number) {
    return this.service.getAllReadBooksByUserId(userId);
  }

  @Post('/')
  @Returns(201, UsersReadBooksModel)
  @(Returns(400).Description('Book was not add'))
  async addBook(@BodyParams() data: UsersReadBooksModel) {
    return this.service.addBookToRead(data);
  }
}
