import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1768919172721 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE [users](
        [id] [int] IDENTITY(1,1) NOT NULL,
	      [name] [nvarchar](50) NOT NULL,
	      [email] [nvarchar](50) NOT NULL,
	      [password] [nvarchar](50) NOT NULL,
        CONSTRAINT [PK_users] PRIMARY KEY CLUSTERED ([id])
      )
    `);

    await queryRunner.query(`
      CREATE TABLE [blogPosts](
        [id] [int] IDENTITY(1,1) NOT NULL,
        [postDate] [date] NOT NULL,
        [postTime] [time](7) NOT NULL,
        [img] [nvarchar](255) NULL,
        [title] [nvarchar](255) NOT NULL,
        [text] [nvarchar](max) NOT NULL,
        [authorId] [int] NULL,
        CONSTRAINT [PK_blogPosts] PRIMARY KEY CLUSTERED([id])
        CONSTRAINT [FK_blogPosts_users]
          FOREIGN KEY ([authorId]) REFERENCES [users]([id])
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE [users]
    `);

    await queryRunner.query(`
      DROP TABLE [blogPosts]
    `);
  }
}
