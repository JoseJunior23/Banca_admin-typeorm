import 'reflect-metadata';
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import { isError } from './middlewares/isError';
import { routes } from './routes/index.routes';
import '@shared/infra/typeorm/connection';
import '@shared/container';
import upload from '@config/upload';
import { errors } from 'celebrate';
import { dataSource } from '../typeorm/connection';

dataSource.initialize().then(() => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use('/files', express.static(upload.directory));
  app.use(routes);

  app.use(errors());

  app.use(isError);
  return app.listen(process.env.PORT, () => {
    console.log('✅ The Server is running !!!');
  });
});
