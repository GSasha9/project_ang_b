import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './UserEntity.js';
import { BookEntity } from './BookEntity.js';

@Entity('userReadBooks')
export class UsersReadBookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  userId: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @Column('int')
  bookId: number;

  @ManyToOne(() => BookEntity)
  @JoinColumn({ name: 'bookId' })
  book: BookEntity;
}
