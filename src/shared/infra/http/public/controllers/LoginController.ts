import { Request, Response } from 'express';

export default class LoginController {
  public async index(request: Request, response: Response): Promise<void> {
    response.render('public/admin/login.njk');
  }
}
