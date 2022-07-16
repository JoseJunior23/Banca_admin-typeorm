import { employeeRouter } from '@modules/employees/infra/router/employee.routes';
import { factoryRouter } from '@modules/factory/infra/routes/factory.routes';
import { teamsRouter } from '@modules/teams/infra/routes/teams.routes';
import { workSessionsRouter } from '@modules/workSessions/infra/routes/work.sessions.routes';

import { Router } from 'express';

export const routes = Router();

// routes.use('/users', userRouter);
// routes.use('/sessions', sessionsRouter);
// routes.use('/password', passwordRouter);
// routes.use('/profile', profileRouter);
routes.use('/work-sessions', workSessionsRouter);
routes.use('/employee', employeeRouter);
routes.use('/teams', teamsRouter);
// routes.use('/production-plan', productionPlanRouter);
routes.use('/factory', factoryRouter);
// routes.use('/shoes-model', shoesModelRouter);
// routes.use('/production-detail', productionDetailRouter);
