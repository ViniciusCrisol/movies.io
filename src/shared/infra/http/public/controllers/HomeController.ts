import { Request, Response } from 'express';
import { container } from 'tsyringe';

import formatDate from '@utils/formatDate';
import GetTrendingPostsSevice from '@modules/posts/services/GetTrendingPostsSevice';

export default class HomeController {
  public async index(request: Request, response: Response): Promise<void> {
    const getTrendingPosts = container.resolve(GetTrendingPostsSevice);

    const trendingPosts = await getTrendingPosts.execute();

    const postsWithFormattedDate = trendingPosts.map(post => ({
      ...post,
      created_at: formatDate(post.created_at),
    }));

    response.render('public/index.njk', {
      posts: postsWithFormattedDate,
    });
  }
}
