import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { PlanInfoController } from '../controllers/PlanInfoController';

export const planInfoRouter = Router();
const planInfoController = new PlanInfoController();

planInfoRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      variation: Joi.string().required(),
      description: Joi.string().required(),
      entry_date: Joi.date().required(),
      factory_plan: Joi.number().required(),
      factory: Joi.string().uuid().required(),
    },
  }),
  planInfoController.create,
);

planInfoRouter.get('/', planInfoController.index);

planInfoRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  planInfoController.show,
);

planInfoRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      variation: Joi.string().required(),
      description: Joi.string().required(),
      entry_date: Joi.date().required(),
      factory_plan: Joi.number().required(),
      factory: Joi.string().uuid().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  planInfoController.update,
);

planInfoRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  planInfoController.delete,
);
