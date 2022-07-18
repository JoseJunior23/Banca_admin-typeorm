import { ICreateShoesModel } from '@modules/shoesModel/domain/models/ICreateShoesModel';
import { IShoesModelRepository } from '@modules/shoesModel/domain/repositories/IShoesModelRepository';
import { dataSource } from '@shared/infra/typeorm/connection';
import { Repository } from 'typeorm';
import { ShoesModel } from '../entities/ShoesModel';

export class ShoesModelRepository implements IShoesModelRepository {
  private ormRepository: Repository<ShoesModel>;
  constructor() {
    this.ormRepository = dataSource.getRepository(ShoesModel);
  }

  public async create({
    reference,
    description,
    price_pairs_shoes,
    price_pespontador,
    price_coladeira,
    factory,
  }: ICreateShoesModel): Promise<ShoesModel> {
    const shoesModel = this.ormRepository.create({
      reference,
      description,
      price_pairs_shoes,
      price_pespontador,
      price_coladeira,
      factory,
    });
    await this.ormRepository.save(shoesModel);
    return shoesModel;
  }

  public async save(shoesModel: ShoesModel): Promise<ShoesModel> {
    await this.ormRepository.save(shoesModel);
    return shoesModel;
  }

  public async remove(shoesModel: ShoesModel): Promise<void> {
    await this.ormRepository.save(shoesModel);
  }

  public async findAll(): Promise<ShoesModel[]> {
    const shoesModel = await this.ormRepository.find();
    return shoesModel;
  }

  public async findById(id: string): Promise<ShoesModel | null> {
    const shoesModel = await this.ormRepository.findOne({
      where: { id },
      relations: ['factory'],
    });
    return shoesModel;
  }

  public async findByReference(reference: string): Promise<ShoesModel | null> {
    const shoesModel = await this.ormRepository.findOneBy({ reference });
    return shoesModel;
  }
}
