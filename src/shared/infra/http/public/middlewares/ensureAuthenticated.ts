import { Request, Response, NextFunction } from 'express';

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) response.redirect('/admin/login');
  else next();
}
