import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import { UserTokensRepository } from '../repositories/UserTokensRepository';

interface IRequest {
  token: string;
  password: string;
}
export class ResetPasswordService {
  public async execute({ token }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userTokensRepository = getCustomRepository(UserTokensRepository);

    const userToken = await userTokensRepository.findByToken(token);
    if (!userToken) {
      throw new AppError('User Token does not exists !!!');
    }

    const user = await usersRepository.findById(userToken.user_id);
    if (!user) {
      throw new AppError('User does not exists !!!');
    }
  }
}
