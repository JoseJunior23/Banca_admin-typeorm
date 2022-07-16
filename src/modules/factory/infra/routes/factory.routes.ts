import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { FactoryController } from '../controllers/FactoryController';

export const factoryRouter = Router();
const factoryController = new FactoryController();

factoryRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      company_name: Joi.string().required(),
      fantasy_name: Joi.string().required(),
      phone: Joi.string().required(),
    },
  }),
  factoryController.create,
);

factoryRouter.get('/', factoryController.index);

factoryRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  factoryController.show,
);

factoryRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      company_name: Joi.string().required(),
      fantasy_name: Joi.string().required(),
      phone: Joi.string().required(),
    },
  }),
  factoryController.update,
);

factoryRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  factoryController.delete,
);
