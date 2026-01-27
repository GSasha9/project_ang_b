import { Controller } from '@tsed/di';
import { BodyParams } from '@tsed/platform-params';
import { Post, Returns } from '@tsed/schema';
import { UsersReadBooksModel } from 'src/models/UsersReadBookModel.js';
import { BookService } from 'src/services/BookService.js';

@Controller('/pricing')
export class BookController {
  constructor(private service: BookService) {}

  @Post('/')
  @Returns(201, UsersReadBooksModel)
  @(Returns(400).Description('Book was not add'))
  async addBook(@BodyParams() data: UsersReadBooksModel) {
    return this.service.addBookToRead(data);
  }
}
