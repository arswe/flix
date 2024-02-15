import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Name is required' })
    .email('Invalid Email Address'),
  password: z.string({ required_error: 'password is required' }).min(6),
});
