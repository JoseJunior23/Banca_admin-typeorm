import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IFactory } from '../domain/models/IFactory';
import { IFactoryId } from '../domain/models/IFactoryId';
import { IFactoryRepository } from '../domain/repositories/IFactoryRepository';

@injectable()
export class ShowFactoryService {
  constructor(
    @inject('FactoryRepository')
    private factoryRepository: IFactoryRepository,
  ) {}

  public async execute({ id }: IFactoryId): Promise<IFactory> {
    const factory = await this.factoryRepository.findById(id);
    if (!factory) {
      throw new AppError('Factory not found !!!');
    }

    return factory;
  }
}
