import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { FactoryRepository } from '../repositories/FactoryRepository';

interface IFactory {
  id: string;
}
export class DeleteFactoryService {
  public async execute({ id }: IFactory) {
    const factoryRepository = getCustomRepository(FactoryRepository);

    const factory = await factoryRepository.findById(id);
    if (!factory) {
      throw new AppError('Factory not found !!!');
    }

    await factoryRepository.remove(factory);
  }
}
