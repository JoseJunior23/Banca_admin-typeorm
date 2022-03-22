import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Factory } from '../entities/Factory';
import { FactoryRepository } from '../repositories/FactoryRepository';

interface IFactory {
  id: string;
  corporate_name?: string;
  fantasy_name?: string;
}
export class UpdateFactoryService {
  public async execute({ id, corporate_name, fantasy_name }: IFactory): Promise<Factory> {
    const factoryRepository = getCustomRepository(FactoryRepository);

    const factory = await factoryRepository.findById(id);
    if (!factory) {
      throw new AppError('Factory not found !!!');
    }

    factory.corporate_name = corporate_name;
    factory.factoryRepository = fantasy_name;

    await factoryRepository.save(factory);
    return factory;
  }
}
