import { ICreateFactory } from '@modules/factory/domain/models/ICreateFactory';
import { IFactoryRepository } from '@modules/factory/domain/repositories/IFactoryRepository';
import { dataSource } from '@shared/infra/typeorm/connection';
import { Repository } from 'typeorm';
import { Factory } from '../entities/Factory';

export class FactoryRepository implements IFactoryRepository {
  private ormRepository: Repository<Factory>;
  constructor() {
    this.ormRepository = dataSource.getRepository(Factory);
  }
  public async create({ company_name, fantasy_name, phone }: ICreateFactory): Promise<Factory> {
    const factory = this.ormRepository.create({
      company_name,
      fantasy_name,
      phone,
    });
    await this.ormRepository.save(factory);
    return factory;
  }

  public async save(factory: Factory): Promise<Factory> {
    await this.ormRepository.save(factory);
    return factory;
  }

  public async remove(factory: Factory): Promise<void> {
    await this.ormRepository.remove(factory);
  }

  public async findByName(company_name: string): Promise<Factory | null> {
    const factory = await this.ormRepository.findOneBy({ company_name });
    return factory;
  }

  public async findById(id: string): Promise<Factory | null> {
    const factory = await this.ormRepository.findOneBy({ id });
    return factory;
  }

  public async findAll(): Promise<Factory[]> {
    const factories = await this.ormRepository.find();
    return factories;
  }
}
