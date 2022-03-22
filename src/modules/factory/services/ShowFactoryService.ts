import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Factory } from '../entities/Factory';
import { FactoryRepository } from '../repositories/FactoryRepository';

interface IFactory {
  id: string;
}
export class ShowFactoryService {
  public async execute({ id }: IFactory): Promise<Factory> {
    const factoryRepository = getCustomRepository(FactoryRepository);

    const factory = await factoryRepository.findById(id);
    if (!factory) {
      throw new AppError('Factory not found !!!');
    }

    return factory;
  }
}
