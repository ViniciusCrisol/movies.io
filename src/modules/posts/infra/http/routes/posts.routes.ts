import { Router } from 'express';

import PostsController from '../controllers/PostsController';

const postsRouter = Router();
const postsController = new PostsController();

postsRouter.post('/create', postsController.create);

export default postsRouter;
