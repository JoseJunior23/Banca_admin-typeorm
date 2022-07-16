import { inject, injectable } from 'tsyringe';
import { IFactory } from '../domain/models/IFactory';
import { IFactoryRepository } from '../domain/repositories/IFactoryRepository';

@injectable()
export class ListFactoryService {
  constructor(
    @inject('FactoryRepository')
    private factoryRepository: IFactoryRepository,
  ) {}
  public async execute(): Promise<IFactory[]> {
    const factory = await this.factoryRepository.findAll();
    return factory;
  }
}
