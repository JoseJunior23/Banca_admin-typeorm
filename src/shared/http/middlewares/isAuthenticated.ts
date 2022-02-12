import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '@config/auth';
import { AppError } from '../errors/AppError';

export function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new AppError('JWT Token is missing');
  }
  const [, token] = authHeader.split(' ');
  try {
    const decodeToken = verify(token, authConfig.jwt.secret);
    return next();
  } catch (error) {
    throw new AppError('Invalid JWt Token');
  }
}