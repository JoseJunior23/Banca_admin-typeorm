import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { ProductionDetailController } from '../controllers/productionDetailController';

export const productionDetailRouter = Router();

const productionDetailController = new ProductionDetailController();

productionDetailRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      entry_date: Joi.date().required(),
      departure_date: Joi.date().required(),
      production_sheet: Joi.number().required(),
      number_pairs: Joi.number().required(),
      billed: Joi.number().required(),
      billed_date: Joi.date().required(),
      payment_date: Joi.date().required(),
      team: Joi.string().uuid().required(),
      prod_plan: Joi.string().uuid().required(),
      model: Joi.string().uuid().required(),
    },
  }),
  productionDetailController.create,
);

productionDetailRouter.get('/', productionDetailController.index);

productionDetailRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  productionDetailController.show,
);

productionDetailRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      entry_date: Joi.date().required(),
      departure_date: Joi.date().required(),
      production_sheet: Joi.number().required(),
      number_pairs: Joi.number().required(),
      billed: Joi.number().required(),
      billed_date: Joi.date().required(),
      payment_date: Joi.date().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  productionDetailController.update,
);

productionDetailRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  productionDetailController.delete,
);
