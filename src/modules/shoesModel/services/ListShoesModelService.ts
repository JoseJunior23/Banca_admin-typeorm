import { inject, injectable } from 'tsyringe';
import { IShoesModel } from '../domain/models/IShoesModel';
import { IShoesModelRepository } from '../domain/repositories/IShoesModelRepository';

@injectable()
export class ListShoesModelService {
  constructor(
    @inject('ShoesModelRepository')
    private shoesModelRepository: IShoesModelRepository,
  ) {}

  public async execute(): Promise<IShoesModel[]> {
    const shoesModel = await this.shoesModelRepository.findAll();
    return shoesModel;
  }
}
