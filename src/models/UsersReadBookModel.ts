import { Configuration } from '@tsed/di';
import { Groups, Integer, Optional, Property, Required } from '@tsed/schema';
import { BookModel } from './BookModel.js';

@Configuration()
export class UsersReadBooksModel {
  @Property()
  @Groups('!creation')
  id: number;

  @Required()
  @Integer()
  userId: number;

  @Required()
  @Integer()
  bookId: number;

  @Optional()
  user?: {
    id: number;
    name: string;
    email: string;
  };

  @Optional()
  book?: BookModel;
}
