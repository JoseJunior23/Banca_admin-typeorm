import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { TeamController } from '../controllers/TeamsController';

export const teamsRouter = Router();
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
  '/:id',
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
    '/:id',
    celebrate({
      [Segments.PARAMS]: {
        id: Joi.string().uuid().required(),
      },
    }),
  ),
);
