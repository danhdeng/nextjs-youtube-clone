import { object, string, TypeOf } from 'zod';

export const loginSchema = {
  body: object({
    email: string({
      required_error: 'email is required',
    }).email('must be a valid email'),
    password: string({
      required_error: 'password is required',
    })
      .min(6, 'Password must be at least 6 characters long')
      .max(64, 'Password should not be longer than 64 characters'),
    confirmPassword: string({
      required_error: 'username is required',
    }),
  }),
};

export type loginBody = TypeOf<typeof loginSchema.body>;
