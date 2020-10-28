import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.render('index.html'));

export default routes;
