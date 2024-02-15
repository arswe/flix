import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { UserModel } from '../models/users';
import { IUser } from '../dtos/common.model';
import { generateToken } from '../middleware/authenticate';
import { loginSchema, registerSchema } from '../validator';

class AuthController {
  public async login(request: Request, response: Response) {
    try {
      const { email, password } = request.body;
      loginSchema.parse({ email, password });

      const user = await UserModel.findOne({ email });

      if (user) {
        const data: IUser = {
          _id: user._id.toString(),
          email: user.email,
          name: user.name,
          token: '',
        };

        const ispasswordMatch = await bcrypt.compare(password, user.password);
        if (ispasswordMatch) {
          const token = generateToken(data);
          user.token = token;
          await user.save();
          data.token = token;

          return response
            .status(201)
            .json({ message: 'User Login SuccessFull', data });
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
      const hashpassword = await bcrypt.hash(password, salt);

      const user = new UserModel({ name, email, password: hashpassword });
      await user.save();

      return response.status(201).json({ message: 'User Created SuccessFull' });
    } catch (error) {
      return response.status(400).json({ status: false, error });
    }
  }
  public async logout(request: Request, response: Response) {}
}

export default new AuthController();
