import { getCustomRepository } from 'typeorm';
import { ShoesModel } from '../entities/ShoesModel';
import { ShoesModelRepository } from '../repositories/ShoesModelRepostories';

export class ListShoesModelService {
  public async execute(): Promise<ShoesModel[]> {
    const shoesModelRepository = getCustomRepository(ShoesModelRepository);

    const shoesModel = await shoesModelRepository.find();
    return shoesModel;
  }
}
