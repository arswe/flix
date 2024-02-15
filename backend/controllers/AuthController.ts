import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { UserModel } from '../db/users';
import { loginSchema, registerSchema } from '../validator';

class AuthController {
  public async login(request: Request, response: Response) {
    try {
      const { email, password } = request.body;
      loginSchema.parse({ email, password });
      const user = await UserModel.findOne({
        email,
      });

      if (user) {
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
          return response
            .status(201)
            .json({ message: 'User Login SuccessFull', data: user });
        }
      }
      return response
        .status(400)
        .json({ status: false, message: 'Invalid Credentials' });
    } catch (error) {
      return response.status(400).json({ status: false, error });
    }
  }
  public async register(request: Request, response: Response) {
    try {
      const { name, email, password } = request.body;
      registerSchema.parse({ name, email, password });

      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashPassword = await bcrypt.hash(password, salt);

      const user = new UserModel({ name, email, password: hashPassword });
      await user.save();

      return response.status(201).json({ message: 'User Created SuccessFull' });
    } catch (error) {
      return response.status(400).json({ status: false, error });
    }
  }
  public async logout(request: Request, response: Response) {}
}

export default new AuthController();
