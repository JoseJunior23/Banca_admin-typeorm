import { AppError } from '@shared/http/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';

interface IUser {
  name: string;
  email: string;
  password: string;
}

export class CreateUserService {
  public async execute({ name, email, password }: IUser): Promise<User> {
    const userRepository = getCustomRepository(UsersRepository);

    const userExists = await userRepository.findByEmail(email);
    if (userExists) {
      throw new AppError('There is already one user with this email');
    }

    const user = userRepository.create({
      name,
      email,
      password,
    });

    await userRepository.save(user);
    return user;
  }
}
