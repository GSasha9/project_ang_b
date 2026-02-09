import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  bookId: number;

  @Column('nvarchar')
  title: string;

  @Column('nvarchar')
  subjects: string;

  @Column('int')
  authors_birth_year: number;

  @Column('int')
  authors_death_year: number;

  @Column('nvarchar')
  authors_name: string;

  @Column('nvarchar')
  summaries: string;

  @Column('nvarchar')
  bookshelves: string;

  @Column('int')
  download_count: number;

  @Column('nvarchar')
  formats: string;
}
