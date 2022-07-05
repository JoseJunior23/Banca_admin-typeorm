import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { EmployeeController } from '../controllers/EmployeeController';

export const employeeRouter = Router();

const employeeController = new EmployeeController();

employeeRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      nickname: Joi.string().required(),
      phone: Joi.string().required(),
      session: Joi.string().optional(),
    },
  }),
  employeeController.create,
);

employeeRouter.get('/', employeeController.index);

employeeRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  employeeController.show,
);

employeeRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().optional(),
      nickname: Joi.string().optional(),
      phone: Joi.string().optional(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  employeeController.update,
);

employeeRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  employeeController.delete,
);
