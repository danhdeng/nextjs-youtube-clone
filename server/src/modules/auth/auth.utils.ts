import jwt from 'jsonwebtoken';

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'myjwtsecretekey';

const EXPIRES_IN = process.env.EXPIRES_IN || '7d';

export function signJwt(payload: string | Buffer | object) {
  return jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: EXPIRES_IN,
  });
}

export function verifyJwt(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET_KEY);
  } catch (e) {
    return null;
  }
}
