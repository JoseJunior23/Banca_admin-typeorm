import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Factory } from '../entities/Factory';
import { FactoryRepository } from '../repositories/FactoryRepository';

interface Ifactory {
  corporate_name: string;
  fantasy_name: string;
}

export class CreateFactoryService {
  public async execute({ corporate_name, fantasy_name }: Ifactory): Promise<Factory> {
    const factoryRepository = getCustomRepository(FactoryRepository);

    const factoryExists = await factoryRepository.findByName(corporate_name);
    if (factoryExists) {
      throw new AppError('There is a factory with this name !!!');
    }

    const factory = factoryRepository.create({
      corporate_name,
      fantasy_name,
    });

    await factoryRepository.save(factory);

    return factory;
  }
}
