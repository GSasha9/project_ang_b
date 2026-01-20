import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./UserEntity.js";

@Entity('blogPosts')
export class BlogPostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('date')
    postDate: Date;

    @Column('time')
    postTime: string

    @Column('nvarchar', {length: 255, nullable: true})
    img?: string | null;

    @Column('nvarchar', {length: 255})
    title: string;

    @Column('nvarchar', {length: 'max'})
    text: string;

    @ManyToOne(() => UserEntity, {
        nullable: true,
        onDelete: 'SET NULL'
    })
    @JoinColumn({name: 'authorId'})
    author?: UserEntity | null
}