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
      session: Joi.string().uuid().required(),
    },
  }),
  employeeController.create,
);
