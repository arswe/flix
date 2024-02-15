import { Request, Response } from 'express';

class AuthController {
  public async login(request: Request, response: Response) {
    return response.json({ message: 'login' });
  }
  public async register(request: Request, response: Response) {}
  public async logout(request: Request, response: Response) {}
}

export default new AuthController();
