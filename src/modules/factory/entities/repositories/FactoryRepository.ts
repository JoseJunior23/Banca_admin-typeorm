import { EntityRepository, Repository } from 'typeorm';
import { Factory } from '../Factory';

@EntityRepository(Factory)
export class FactoryRepository extends Repository<Factory> {
  public async findByName(corporate_name: string): Promise<Factory | undefined> {
    const factory = await this.findOne({
      where: {
        corporate_name,
      },
    });
    return factory;
  }

  public async findById(id: string): Promise<Factory | undefined> {
    const factory = await this.findOne({
      where: {
        id,
      },
    });
    return factory;
  }
}
