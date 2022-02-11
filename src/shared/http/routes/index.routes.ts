import { userRouter } from '@modules/user/routes/users.routes';
import { Router } from 'express';

export const routes = Router();

routes.use('/user', userRouter);
