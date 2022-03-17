import { employeeRouter } from '@modules/employees/router/employee.routes';
import { productionPlanRouter } from '@modules/productionPlan/routes/production.plan.routes';
import { teamsRouter } from '@modules/teams/routes/teams.routes';
import { passwordRouter } from '@modules/users/routes/password.routes';
import { profileRouter } from '@modules/users/routes/profile.routes';
import { sessionsRouter } from '@modules/users/routes/sessions.routes';
import { userRouter } from '@modules/users/routes/users.routes';
import { workSessionsRouter } from '@modules/workSessions/routes/work.sessions.routes';
import { Router } from 'express';

export const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/work-sessions', workSessionsRouter);
routes.use('/employee', employeeRouter);
routes.use('/teams', teamsRouter);
routes.use('/production-plan', productionPlanRouter);
