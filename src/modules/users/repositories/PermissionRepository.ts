import { EntityRepository, Repository } from 'typeorm';
import { Permission } from '../entities/Permission';

@EntityRepository(Permission)
export class PermissionRepository extends Repository<Permission> {
  public async findByName(name: string): Promise<Permission | undefined> {
    const permission = this.findOne({
      where: {
        name,
      },
    });
    return permission;
  }
}
