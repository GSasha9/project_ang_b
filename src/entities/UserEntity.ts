import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('nvarchar', { length: 50 })
  name: string;

  @Column('nvarchar', { length: 50 })
  email: string;

  @Column('nvarchar', { length: 50 })
  password: string;
}
