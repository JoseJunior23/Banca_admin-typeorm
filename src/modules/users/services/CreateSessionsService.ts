import { AppError } from '@shared/http/errors/AppError';
import { compare } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';

interface IUser {
  email: string;
  password: string;
}

// interface IResponse {
//   user: User;
// }
export class createSessionsService {
  public async execute({ email, password }: IUser): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findByEmail(email);
    if (!user) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const passwordConfirmation = await compare(password, user.password);
    if (!passwordConfirmation) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    return user;
  }
}
