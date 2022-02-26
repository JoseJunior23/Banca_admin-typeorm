import { EntityRepository, Repository } from 'typeorm';
import { Permission } from '../entities/Permission';

@EntityRepository(Permission)
export class PermisssionRepository extends Repository<Permission> {}
