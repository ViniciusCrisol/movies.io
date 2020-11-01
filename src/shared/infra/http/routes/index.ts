import { Router } from 'express';

import postsRoutes from '@modules/posts/infra/http/routes/posts.routes';
import pulbicRoutes from '../public/routes';

const routes = Router();

routes.use('/posts', postsRoutes);
routes.use(pulbicRoutes);

export default routes;
