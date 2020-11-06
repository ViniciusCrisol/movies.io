import { Router } from 'express';

import HomeController from '../controllers/HomeController';
import AdminController from '../controllers/AdminController';
import CreatePostController from '../controllers/CreatePostController';
import PostController from '../controllers/PostController';

const publicRouter = Router();

const homeController = new HomeController();
const adminController = new AdminController();
const createPostController = new CreatePostController();
const post = new PostController();

publicRouter.get('/', homeController.index);
publicRouter.get('/admin/login', adminController.index);
publicRouter.get('/admin/posts/create', createPostController.index);
publicRouter.get('/admin/posts/:id', post.index);

export default publicRouter;
