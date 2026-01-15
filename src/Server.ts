import { join } from 'node:path';
import { Configuration } from '@tsed/di';
import { application } from '@tsed/platform-http';
import '@tsed/platform-express';
import '@tsed/ajv';
import '@tsed/passport';
import { config } from './config/index.js';
import * as rest from './controllers/rest/index.js';
import '@tsed/swagger';
import session from 'express-session';

@Configuration({
  ...config,
  acceptMimes: ['application/json'],
  httpPort: process.env.PORT || 8083,
  httpsPort: false,
  mount: {
    '/rest': [...Object.values(rest)],
  },
  middlewares: [
    session({
      secret: 'someSecretKey',
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge: 60000 },
    }),
    'cors',
    'cookie-parser',
    'compression',
    'method-override',
    'json-parser',
    { use: 'urlencoded-parser', options: { extended: true } },
  ],
  views: {
    root: join(process.cwd(), '../views'),
    extensions: {
      ejs: 'ejs',
    },
  },
  swagger: [
    {
      path: '/docs',
    },
  ],
})
export class Server {
  protected app = application();
}
