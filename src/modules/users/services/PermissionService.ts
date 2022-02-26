import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Permission } from '../entities/Permission';
import { PermissionRepository } from '../repositories/PermissionRepository';

interface IPermission {
  name: string;
  description: string;
}

export class PermissionService {
  public async execute({
    name,
    description,
  }: IPermission): Promise<Permission> {
    const permissionRepository = getCustomRepository(PermissionRepository);

    const permissionExists = await permissionRepository.findByName(name);
    if (permissionExists) {
      throw new AppError('Permission already exists !!!');
    }

    const permission = permissionRepository.create({
      name,
      description,
    });

    await permissionRepository.save(permission);
    return permission;
  }
}
