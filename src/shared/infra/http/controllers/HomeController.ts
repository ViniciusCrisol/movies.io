import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GetTrendingPostsSevice from '@modules/posts/services/GetTrendingPostsSevice';

export default class HomeController {
  public async index(request: Request, response: Response): Promise<void> {
    const getTrendingPosts = container.resolve(GetTrendingPostsSevice);

    const trendingPosts = await getTrendingPosts.execute();

    response.render('public/index.njk', {
      posts: trendingPosts,
    });
  }
}
