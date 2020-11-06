import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import Post from '../infra/typeorm/entities/Post';
import IPostsRepository from '../repositories/IPostsRepository';

@injectable()
class GetPostsSevice {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  public async execute(id: string): Promise<Post> {
    const post = await this.postsRepository.getById(id);

    if (!post) throw new AppError('Post not found', 404);

    return post;
  }
}

export default GetPostsSevice;
