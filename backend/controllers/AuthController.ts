import { Request, Response } from 'express';
import { registerSchema } from '../validator';

class AuthController {
  public async login(request: Request, response: Response) {
    return response.json({ message: 'login' });
  }
  public async register(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;
      registerSchema.parse({ name, email, password });
    } catch (error) {
      return response.status(400).json({ status: false, error });
    }
  }
  public async logout(request: Request, response: Response) {}
}

export default new AuthController();
