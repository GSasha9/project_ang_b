import { Configuration } from '@tsed/di';
import '@tsed/ajv';
import { Groups, Integer, Optional, Property, Required } from '@tsed/schema';

@Configuration()
export class BookModel {
  @Property()
  @Groups('!creation')
  id: number;

  @Required()
  @Integer()
  bookId: number;

  @Required()
  title: string;

  @Optional()
  subjects: string[];

  @Required()
  @Property(Number)
  authors_birth_year: number | null;

  @Required()
  @Property(Number)
  authors_death_year: number | null;

  @Required()
  authors_name: string[];

  @Required()
  summaries: string[];

  @Required()
  bookshelves: string[];

  @Required()
  download_count: number;

  @Required()
  formats: string;
}
