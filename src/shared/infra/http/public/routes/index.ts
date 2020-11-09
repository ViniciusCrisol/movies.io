import { Router } from 'express';

import PostController from '../controllers/PostController';
import HomeController from '../controllers/HomeController';
import LoginController from '../controllers/LoginController';
import Page404Controller from '../controllers/Page404Controller';
import CreatePostController from '../controllers/CreatePostController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const publicRouter = Router();

const post = new PostController();
const homeController = new HomeController();
const loginController = new LoginController();
const page404Controller = new Page404Controller();
const createPostController = new CreatePostController();

publicRouter.get('/', homeController.index);
publicRouter.get('/posts/:id', post.index);
publicRouter.get('/admin/login', loginController.index);
publicRouter.get(
  '/admin/posts/criar',
  ensureAuthenticated,
  createPostController.index,
);

publicRouter.use(page404Controller.index);

export default publicRouter;
