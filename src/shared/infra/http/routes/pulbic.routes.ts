import { Router } from 'express';

import HomeController from '../controllers/HomeController';

const publicRouter = Router();

const homeController = new HomeController();

publicRouter.get('/', homeController.index);

export default publicRouter;
