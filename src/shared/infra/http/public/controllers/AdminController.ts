import { Request, Response } from 'express';

export default class HomeController {
  public async index(request: Request, response: Response): Promise<void> {
    response.render('public/admin/index.njk');
  }
}
