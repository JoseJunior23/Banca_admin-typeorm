import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IFactory } from '../domain/models/IFactory';
import { IUpdateFactory } from '../domain/models/IUpdateFactory';
import { IFactoryRepository } from '../domain/repositories/IFactoryRepository';

@injectable()
export class UpdateFactoryService {
  constructor(
    @inject('FactoryRepository')
    private factoryRepository: IFactoryRepository,
  ) {}

  public async execute({
    id,
    company_name,
    fantasy_name,
    phone,
  }: IUpdateFactory): Promise<IFactory> {
    const factory = await this.factoryRepository.findById(id);
    if (!factory) {
      throw new AppError('Factory not found !!!');
    }

    factory.company_name = company_name;
    factory.fantasy_name = fantasy_name;
    factory.phone = phone;

    await this.factoryRepository.save(factory);
    return factory;
  }
}
