import { Router } from 'express';

import PostController from '../controllers/PostController';
import HomeController from '../controllers/HomeController';
import AdminController from '../controllers/AdminController';
import CreatePostController from '../controllers/CreatePostController';

const publicRouter = Router();

const post = new PostController();
const homeController = new HomeController();
const adminController = new AdminController();
const createPostController = new CreatePostController();

publicRouter.get('/posts/:id', post.index);
publicRouter.get('/', homeController.index);
publicRouter.get('/admin/login', adminController.index);
publicRouter.get('/admin/posts/create', createPostController.index);

export default publicRouter;
