import { Injectable } from '@tsed/di';
import { AppDataSource } from 'src/data-source.js';
import { BookEntity } from 'src/entities/BookEntity.js';
import { UsersReadBookEntity } from 'src/entities/UsersReadBookEntity.js';
import { UsersReadBooksModel } from 'src/models/UsersReadBookModel.js';

@Injectable()
export class BookService {
  dbBook = AppDataSource.getRepository(BookEntity);
  dbUserReadBook = AppDataSource.getRepository(UsersReadBookEntity);

  // async getAllBooksByUserId(id: number) {
  //   const books = await this.dbUserReadBook.findBy({ userId: id });

  //   return books;
  // }

  async addBookToRead(data: UsersReadBooksModel) {
    let book = await this.dbBook.findOneBy({ bookId: data.bookId });
    if (!book) {
      book = this.dbBook.create({ bookId: data.bookId });
      await this.dbBook.save(book);
    }

    const userAlreadyReadBook = await this.dbUserReadBook.findOneBy({
      userId: data.userId,
      bookId: book.id,
    });

    if (userAlreadyReadBook) {
      await this.dbUserReadBook.remove(userAlreadyReadBook);
    } else {
      const entity = new UsersReadBookEntity();
      entity.userId = data.userId;
      entity.bookId = book?.id!;
      return this.dbUserReadBook.save(entity);
    }
  }
}
