import { sign } from 'jsonwebtoken';


export const generateToken = (data) => {
  const token = sign(data, SECRETE_KEY, {
    expiresIn: '1 day',
  });
  return token;
};
