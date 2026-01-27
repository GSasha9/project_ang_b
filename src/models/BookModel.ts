import { Configuration } from '@tsed/di';
import '@tsed/ajv';
import { Groups, Integer, Property, Required } from '@tsed/schema';

@Configuration()
export class BookModel {
  @Property()
  @Groups('!creation')
  id: number;

  @Required()
  @Integer()
  bookId: number;
}
