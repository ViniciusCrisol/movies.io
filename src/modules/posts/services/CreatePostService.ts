import { injectable, inject } from 'tsyringe';

import Post from '../infra/typeorm/entities/Post';
import ICreatePostDTO from '../dtos/ICreatePostDTO';
import IPostsRepository from '../repositories/IPostsRepository';

@injectable()
class CreatePostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {}

  public async execute(data: ICreatePostDTO): Promise<Post> {
    const { title, resume, content, thumbnail_url } = data;

    const post = await this.postsRepository.create({
      title,
      resume,
      content,
      thumbnail_url,
    });

    return post;
  }
}

export default CreatePostService;
