import { Router } from 'express';

import postsRoutes from '@modules/posts/infra/http/routes/posts.routes';
import pulbicRoutes from './pulbic.routes';

const routes = Router();

routes.use(postsRoutes);
routes.use(pulbicRoutes);

export default routes;
