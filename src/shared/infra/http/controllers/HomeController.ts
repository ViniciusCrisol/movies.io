import { Request, Response } from 'express';

export default class HomeController {
  public async index(request: Request, response: Response): Promise<void> {
    return response.render('public/index.njk');
  }
}
