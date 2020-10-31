import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePostService from '@modules/posts/services/CreatePostService';

export default class PostsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { content, resume, title, thumbnail_url } = request.body;

    const createPost = container.resolve(CreatePostService);
    await createPost.execute({ content, resume, title, thumbnail_url });

    return response.status(204).json();
  }
}
