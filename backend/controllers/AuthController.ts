import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { UserModel } from '../db/users';
import { registerSchema } from '../validator';

class AuthController {
  public async login(request: Request, response: Response) {
    return response.json({ message: 'login' });
  }
  public async register(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;
      registerSchema.parse({ name, email, password });

      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashPassword = await bcrypt.hash(password, salt);

      const user = new UserModel({ name, email, password });
      await user.save();

      return response.status(201).json({ message: 'User Created SuccessFull' });
    } catch (error) {
      return response.status(400).json({ status: false, error });
    }
  }
  public async logout(request: Request, response: Response) {}
}

export default new AuthController();
