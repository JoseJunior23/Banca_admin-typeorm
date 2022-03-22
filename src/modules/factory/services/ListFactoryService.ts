import { getCustomRepository } from 'typeorm';
import { Factory } from '../entities/Factory';
import { FactoryRepository } from '../repositories/FactoryRepository';

export class ListFactoryService {
  public async execute(): Promise<Factory[]> {
    const factoryRepository = getCustomRepository(FactoryRepository);
    const factory = await factoryRepository.find();
    return factory;
  }
}
