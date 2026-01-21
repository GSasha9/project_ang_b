import { DataSourceOptions } from 'typeorm';

export const typeormConfig: DataSourceOptions = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'app_user',
  password: 'user',
  database: 'Site',

  options: {
    encrypt: false,
    trustServerCertificate: true,
  },

  entities: [`${process.cwd()}/src/entities/**/*.ts`],

  synchronize: false,
  logging: true,
};
