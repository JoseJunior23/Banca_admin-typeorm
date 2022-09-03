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
      work_section: Joi.string().uuid(),
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
      work_section: Joi.string().uuid(),
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
