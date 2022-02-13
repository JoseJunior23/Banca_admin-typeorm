import { AppError } from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
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

    const emailExists = await userRepository.findByEmail(email);
    if (emailExists) {
      throw new AppError('Email address already used');
    }

    const hashedPassword = await hash(password, 8);
    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await userRepository.save(user);
    return user;
  }
}
