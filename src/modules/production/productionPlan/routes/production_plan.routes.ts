import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { ProductionPlanController } from '../controllers/ProductionPlanController';

export const productionPlanRouter = Router();
const productionPlanController = new ProductionPlanController();

productionPlanRouter.post(
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
  productionPlanController.create,
);

productionPlanRouter.get('/', productionPlanController.index);

productionPlanRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productionPlanController.show,
);

productionPlanRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      variation: Joi.string().required(),
      description: Joi.string().required(),
      entry_date: Joi.date().required(),
      factory_plan: Joi.number().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productionPlanController.update,
);

productionPlanRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productionPlanController.delete,
);
