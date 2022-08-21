import { ICreateWorkSection } from '@modules/workSections/domain/models/ICreateWorkSection';
import { IWorkSectionRepository } from '@modules/workSections/domain/repositories/IWorkSectionRepository';
import { dataSource } from '@shared/infra/typeorm/connection';
import { Repository } from 'typeorm';
import { WorkSection } from '../entities/WorkSection';

export class WorkSectionRepository implements IWorkSectionRepository {
  private ormRepository: Repository<WorkSection>;
  constructor() {
    this.ormRepository = dataSource.getRepository(WorkSection);
  }

  public async create({ name, description }: ICreateWorkSection): Promise<WorkSection> {
    const workSection = this.ormRepository.create({ name, description });
    await this.ormRepository.save(workSection);
    return workSection;
  }

  public async save(workSection: WorkSection): Promise<WorkSection> {
    await this.ormRepository.save(workSection);
    return workSection;
  }

  public async findAll(): Promise<WorkSection[]> {
    const workSections = await this.ormRepository.find();
    return workSections;
  }

  public async remove(workSection: WorkSection): Promise<void> {
    await this.ormRepository.remove(workSection);
  }

  public async findById(id: string): Promise<WorkSection | null> {
    const workSection = await this.ormRepository.findOneBy({ id });
    return workSection;
  }

  public async findByName(name: string): Promise<WorkSection | null> {
    const workSection = await this.ormRepository.findOneBy({ name });
    return workSection;
  }
}
