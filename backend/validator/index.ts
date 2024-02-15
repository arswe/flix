import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'Name is required' })
    .email('Invalid Email Address'),
  password: z.string({ required_error: 'password is required' }).min(6),
});

export const registerSchema = z.object({
  name: z.string({ required_error: 'Name is required' }).min(2),
  email: z
    .string({ required_error: 'Name is required' })
    .email('Invalid Email Address'),
  password: z.string({ required_error: 'password is required' }).min(6),
});
