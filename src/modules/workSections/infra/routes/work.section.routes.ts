import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { WorkSectionController } from '../controllers/WorkSessionsController';

export const workSectionRouter = Router();

const workSectionController = new WorkSectionController();

workSectionRouter.get('/', workSectionController.index);

workSectionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string(),
    },
  }),
  workSectionController.create,
);

workSectionRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  workSectionController.show,
);

workSectionRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string().optional(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  workSectionController.update,
);

workSectionRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  workSectionController.delete,
);
