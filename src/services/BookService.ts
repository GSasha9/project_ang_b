import { Injectable } from '@tsed/di';
import { AppDataSource } from 'src/data-source.js';
import { BookEntity } from 'src/entities/BookEntity.js';
import { UsersReadBookEntity } from 'src/entities/UsersReadBookEntity.js';
import { UsersReadBooksModel } from 'src/models/UsersReadBookModel.js';
import { DeepPartial } from 'typeorm';

@Injectable()
export class BookService {
  dbBook = AppDataSource.getRepository(BookEntity);
  dbUserReadBook = AppDataSource.getRepository(UsersReadBookEntity);

  async getAllReadBooksByUserId(id: number) {
    const books = await this.dbUserReadBook.find({
      where: { userId: id },
      relations: { book: true },
    });
    return books;
  }

  async addBookToRead(data: UsersReadBooksModel) {
    let book = await this.dbBook.findOneBy({ bookId: data.bookId });
    if (!book) {
      let newBook: DeepPartial<BookEntity> = { bookId: data.bookId };
      if (data.book) {
        newBook = {
          bookId: data.bookId,
          title: data.book?.title || '',
          subjects: JSON.stringify(data.book?.subjects),
          authors_birth_year: data.book.authors_birth_year!,
          authors_death_year: data.book.authors_death_year!,
          authors_name: JSON.stringify(data.book.authors_name),
          summaries: JSON.stringify(data.book.summaries),
          bookshelves: JSON.stringify(data.book.bookshelves),
          download_count: data.book.download_count,
          formats: JSON.stringify(data.book.formats),
        };
      }
      book = this.dbBook.create(newBook);
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
