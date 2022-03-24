import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { FactoryController } from '../controllers/FactoryController';

export const factoryRouter = Router();
const factoryController = new FactoryController();

factoryRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      corporate_name: Joi.string().required(),
      fantasy_name: Joi.string().required(),
    },
  }),
  factoryController.create,
);
