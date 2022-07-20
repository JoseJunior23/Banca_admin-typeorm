import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { PlanDetailController } from '../controllers/planDetailController';

export const planDetailRouter = Router();

const planDetailController = new PlanDetailController();

planDetailRouter.post(
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
      plan_info: Joi.string().uuid().required(),
      model: Joi.string().uuid().required(),
    },
  }),
  planDetailController.create,
);

planDetailRouter.get('/', planDetailController.index);

planDetailRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  planDetailController.show,
);

planDetailRouter.put(
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
      team: Joi.string().uuid().required(),
      plan_info: Joi.string().uuid().required(),
      model: Joi.string().uuid().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  planDetailController.update,
);

planDetailRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  planDetailController.delete,
);
