import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.render('public/index.njk'));

export default routes;
