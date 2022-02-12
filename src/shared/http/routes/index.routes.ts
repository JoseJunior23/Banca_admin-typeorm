import { userRouter } from '@modules/users/routes/users.routes';
import { Router } from 'express';

export const routes = Router();

routes.use('/users', userRouter);
