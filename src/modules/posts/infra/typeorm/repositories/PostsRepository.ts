import { getRepository, Repository } from 'typeorm';

import ICreatePostDTO from '@modules/posts/dtos/ICreatePostDTO';
import IPostsRepository from '@modules/posts/repositories/IPostsRepository';
import Post from '../entities/Post';

class PostsRepository implements IPostsRepository {
  private ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = getRepository(Post);
  }

  public async create(data: ICreatePostDTO): Promise<Post> {
    const post = this.ormRepository.create(data);

    await this.ormRepository.save(post);

    return post;
  }

  public async delete(post: Post): Promise<void> {
    await this.ormRepository.remove(post);
  }

  public async save(post: Post): Promise<Post> {
    return this.ormRepository.save(post);
  }

  public async get(): Promise<Post[]> {
    const posts = await this.ormRepository.find();

    return posts;
  }

  public async getTrending(): Promise<Post[]> {
    const posts = await this.ormRepository.find({
      take: 4,
      order: {
        created_at: 'ASC',
      },
    });

    return posts;
  }
}

export default PostsRepository;
