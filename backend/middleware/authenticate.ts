import { sign } from 'jsonwebtoken';
import { IUser } from '../dtos/common.model';

const SECRETE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

export const generateToken = (data: IUser) => {
  const token = sign(data, SECRETE_KEY, {
    expiresIn: '1 day',
  });
  return token;
};
