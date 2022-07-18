import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IShoesModelId } from '../domain/models/IShoesModelId';
import { IShoesModelRepository } from '../domain/repositories/IShoesModelRepository';

@injectable()
export class DeleteShoesModelService {
  constructor(
    @inject('ShoesModelRepository')
    private shoesModelRepository: IShoesModelRepository,
  ) {}

  public async execute({ id }: IShoesModelId) {
    const shoesModel = await this.shoesModelRepository.findById(id);
    if (!shoesModel) {
      throw new AppError('Shoes model not found !!!');
    }

    await this.shoesModelRepository.remove(shoesModel);
  }
}
