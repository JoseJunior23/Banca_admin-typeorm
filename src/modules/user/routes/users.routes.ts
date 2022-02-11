import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { UserController } from '../controllers/UserController';

export const userRouter = Router();

const usersController = new UserController();

userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);
