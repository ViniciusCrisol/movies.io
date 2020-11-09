import { Request, Response } from 'express';

export default class Page404Controller {
  public async index(request: Request, response: Response): Promise<void> {
    response.render('public/404.njk');
  }
}
