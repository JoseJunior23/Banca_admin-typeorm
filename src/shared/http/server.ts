import 'reflect-metadata';
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import { isError } from './middlewares/isError';
import { routes } from './routes/index.routes';
import '@shared/typeorm/connection';
import upload from '@config/upload';

export const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(upload.directory));
app.use(routes);

app.use(isError);
app.listen(3333, () => {
  console.log('✅ Server started in http://localhost:3333');
});
