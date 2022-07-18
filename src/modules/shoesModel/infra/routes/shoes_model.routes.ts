import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { ShoesModelController } from '../controllers/ShoesModelController';

export const shoesModelRouter = Router();

const shoesModelController = new ShoesModelController();

shoesModelRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      reference: Joi.string().required(),
      description: Joi.string().required(),
      price_pairs_shoes: Joi.number().required(),
      price_pespontador: Joi.number().required(),
      price_coladeira: Joi.number().required(),
      factory: Joi.string().uuid().required(),
    },
  }),
  shoesModelController.create,
);

shoesModelRouter.get('/', shoesModelController.index);

shoesModelRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  shoesModelController.show,
);

shoesModelRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      reference: Joi.string().required(),
      description: Joi.string().required(),
      price_pairs_shoes: Joi.number().required(),
      price_pespontador: Joi.number().required(),
      price_coladeira: Joi.number().required(),
      factory: Joi.string().uuid().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  shoesModelController.update,
);

shoesModelRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  shoesModelController.delete,
);
