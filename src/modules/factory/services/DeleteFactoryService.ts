import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IFactoryId } from '../domain/models/IFactoryId';
import { IFactoryRepository } from '../domain/repositories/IFactoryRepository';

@injectable()
export class DeleteFactoryService {
  constructor(
    @inject('FactoryRepository')
    private factoryRepository: IFactoryRepository,
  ) {}

  public async execute({ id }: IFactoryId) {
    const factory = await this.factoryRepository.findById(id);
    if (!factory) {
      throw new AppError('Factory not found !!!');
    }

    await this.factoryRepository.remove(factory);
  }
}
