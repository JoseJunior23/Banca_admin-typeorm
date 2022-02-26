import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { RolesUserController } from '../controllers/RolesUserController';

export const rolesRouter = Router();
const rolesController = new RolesUserController();

rolesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().optional(),
    },
  }),
  rolesController.create,
);
