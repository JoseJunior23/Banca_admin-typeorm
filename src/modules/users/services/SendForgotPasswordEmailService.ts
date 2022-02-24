import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import { UserTokensRepository } from '../repositories/UserTokensRepository';
import { AppError } from '@shared/errors/AppError';
import { EtherealMail } from '@config/mail/EtherealMail';
import path from 'path';

interface IRequest {
  email: string;
}

export class SendForgotPasswordEmailService {
  public async execute({ email }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userTokensRepository = getCustomRepository(UserTokensRepository);

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists.');
    }

    const { token } = await userTokensRepository.generate(user.id);

    const forgotTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'forgotPassword.hbs',
    );

    await EtherealMail.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: '[Banca_admin] Recuperação de Senha',
      templateData: {
        file: forgotTemplate,
        variables: {
          name: user.name,
          link: `http://localhost:3000/reset_password?token=${token}`,
        },
      },
    });
  }
}
