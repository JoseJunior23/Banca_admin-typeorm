import { passwordRouter } from '@modules/users/routes/password.routes';
import { permissionRouter } from '@modules/users/routes/permission.routes';
import { profileRouter } from '@modules/users/routes/profile.routes';
import { rolesRouter } from '@modules/users/routes/role.routes';
import { sessionsRouter } from '@modules/users/routes/sessions.routes';
import { userRouter } from '@modules/users/routes/users.routes';
import { Router } from 'express';

export const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/permissions', permissionRouter);
routes.use('/roles', rolesRouter);
