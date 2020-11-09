import { Request, Response } from 'express';
import { container } from 'tsyringe';

import formatDate from '@utils/formatDate';
import GetPostService from '@modules/posts/services/GetPostService';

export default class PostController {
  public async index(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const getTrendingPosts = container.resolve(GetPostService);

    const post = await getTrendingPosts.execute(id);

    const postWithFormattedDate = {
      ...post,
      created_at: formatDate(post.created_at),
    };

    response.render('public/post.njk', { post: postWithFormattedDate });
  }
}
