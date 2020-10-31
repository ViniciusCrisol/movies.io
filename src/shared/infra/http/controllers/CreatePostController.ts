import { Request, Response } from 'express';

export default class CreatePostController {
  public async index(request: Request, response: Response): Promise<void> {
    response.render('public/admin/create-post.njk');
  }
}
