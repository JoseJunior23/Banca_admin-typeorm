// import { factoryRouter } from '@modules/factory/routes/factory.routes';
// import { productionDetailRouter } from '@modules/production/productionDetail/routes/production_detail.routes';
// import { productionPlanRouter } from '@modules/production/productionPlan/routes/production_plan.routes';
// import { shoesModelRouter } from '@modules/shoesModel/routes/shoes_model.routes';
// import { teamsRouter } from '@modules/teams/routes/teams.routes';
// import { passwordRouter } from '@modules/users/routes/password.routes';
// import { profileRouter } from '@modules/users/routes/profile.routes';
// import { sessionsRouter } from '@modules/users/routes/sessions.routes';
// import { userRouter } from '@modules/users/routes/users.routes';

import { employeeRouter } from '@modules/employees/infra/router/employee.routes';
import { workSessionsRouter } from '@modules/workSessions/infra/routes/work.sessions.routes';

import { Router } from 'express';

export const routes = Router();

// routes.use('/users', userRouter);
// routes.use('/sessions', sessionsRouter);
// routes.use('/password', passwordRouter);
// routes.use('/profile', profileRouter);
routes.use('/work-sessions', workSessionsRouter);
routes.use('/employee', employeeRouter);
// routes.use('/teams', teamsRouter);
// routes.use('/production-plan', productionPlanRouter);
// routes.use('/factory', factoryRouter);
// routes.use('/shoes-model', shoesModelRouter);
// routes.use('/production-detail', productionDetailRouter);
