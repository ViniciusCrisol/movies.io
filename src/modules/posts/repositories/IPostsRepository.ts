import ICreatePostDTO from '../dtos/ICreatePostDTO';
import Post from '../infra/typeorm/entities/Post';

export default interface IPostsRepository {
  create(data: ICreatePostDTO): Promise<Post>;
  delete(post: Post): Promise<void>;
  save(data: Post): Promise<Post>;
  list(): Promise<Post[]>;
}
