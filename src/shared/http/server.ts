import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import { isError } from './middlewares/isError';
import { routes } from './routes/index.routes';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(isError);
app.listen(3333, () => {
  console.log('✅ Server started in http://localhost:3333');
});
