import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { findUserByEmail } from '../user/user.service';
import { LoginBody } from './auth.schema';
import omit from '../../helpers/omit';
import { signJwt } from './auth.utils';

export async function loginHandler(
  req: Request<{}, {}, LoginBody>,
  res: Response
) {
  const { email, password } = req.body;

  //find user by find via user service call
  const user = await findUserByEmail(email);

  if (!user || !user.comparePassword(password)) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send('Invalid email or password');
  }

  const payload = omit(user.toJSON(), ['password', '__v']);

  const jwt = signJwt(payload);

  res.cookie('youtubeVideoAccessToken', jwt, {
    maxAge: 3.154e10, //1 year
    httpOnly: true,
    domain: 'localhost',
    path: '/',
    sameSite: 'strict',
    secure: false,
  });
  return res.status(StatusCodes.OK).send(jwt);
}
