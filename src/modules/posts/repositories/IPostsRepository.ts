import ICreatePostDTO from '../dtos/ICreatePostDTO';
import Post from '../infra/typeorm/entities/Post';

export default interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<Post>;
  delete(post: Post): Promise<void>;
  save(data: Post): Promise<Post>;
  get(): Promise<Post[]>;
  getById(id: string): Promise<Post | undefined>;
  getTrending(): Promise<Post[]>;
}
