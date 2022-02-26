import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Roles } from '../entities/Roles';
import { RolesRepository } from '../repositories/RolesRepository';

interface IRolesUser {
  name: string;
  description: string;
}

export class RolesUserService {
  public async execute({ name, description }: IRolesUser): Promise<Roles> {
    const rolesRepository = getCustomRepository(RolesRepository);

    const rolesExists = await rolesRepository.findByName(name);
    if (rolesExists) {
      throw new AppError('Roles already exists !!!');
    }

    const role = rolesRepository.create({
      name,
      description,
    });

    await rolesRepository.save(role);
    return role;
  }
}
