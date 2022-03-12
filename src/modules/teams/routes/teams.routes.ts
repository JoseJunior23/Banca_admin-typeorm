import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { TeamController } from '../controllers/TeamsController';

const teamsRouter = Router();
const teamsController = new TeamController();

teamsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string(),
    },
  }),
  teamsController.create,
);

teamsRouter.get('/', teamsController.index);

teamsRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      description: Joi.string(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),

  teamsRouter.delete(
    '/',
    celebrate({
      [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
      },
    }),
  ),
);
