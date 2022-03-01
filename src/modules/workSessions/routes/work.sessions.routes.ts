import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { WorkSessionsController } from '../controllers/WorkSessionsController';

export const workSessionsRouter = Router();

const workSessionsController = new WorkSessionsController();

workSessionsRouter.get('/', workSessionsController.index);

workSessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().optional(),
    },
  }),
  workSessionsController.create,
);
