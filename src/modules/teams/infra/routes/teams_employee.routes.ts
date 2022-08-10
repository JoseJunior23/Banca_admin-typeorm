import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { TeamsEmployeeController } from '../controllers/TeamsEmployeesController';

export const teamsEmployeeRouter = Router();

const teamEmployeeController = new TeamsEmployeeController();

teamsEmployeeRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      team_id: Joi.string().uuid().required(),
      employees: Joi.required(),
    },
  }),
  teamEmployeeController.create,
);
