import { getCustomRepository } from 'typeorm';
import { Factory } from '../entities/Factory';
import { FactoryRepository } from '../repositories/FactoryRepository';

interface Ifactory {
  corporate_name: string;
  fantasy_name: string;
}

export class CreateProductionPlanService {
  public async execute({ corporate_name, fantasy_name }: Ifactory): Promise<Factory> {
    const factoryRepository = getCustomRepository(FactoryRepository);

    const factory = factoryRepository.create({
      corporate_name,
      fantasy_name,
    });

    await factoryRepository.save(factory);

    return factory;
  }
}
