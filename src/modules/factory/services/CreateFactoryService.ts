import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateFactory } from '../domain/models/ICreateFactory';
import { IFactory } from '../domain/models/IFactory';
import { IFactoryRepository } from '../domain/repositories/IFactoryRepository';

@injectable()
export class CreateFactoryService {
  constructor(
    @inject('FactoryRepository')
    private factoryRepository: IFactoryRepository,
  ) {}

  public async execute({ company_name, fantasy_name, phone }: ICreateFactory): Promise<IFactory> {
    const factoryExists = await this.factoryRepository.findByName(company_name);
    if (factoryExists) {
      throw new AppError('There is a factory with this name !!!');
    }

    const factory = this.factoryRepository.create({
      company_name,
      fantasy_name,
      phone,
    });

    return factory;
  }
}
