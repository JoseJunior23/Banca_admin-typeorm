import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateWorkSection } from '../domain/models/ICreateWorkSection';
import { IWorkSection } from '../domain/models/IWorkSection';
import { IWorkSectionRepository } from '../domain/repositories/IWorkSectionRepository';

@injectable()
export class CreateWorkSectionService {
  constructor(
    @inject('WorkSectionRepository')
    private workSectionRepository: IWorkSectionRepository,
  ) {}

  public async execute({ name, description }: ICreateWorkSection): Promise<IWorkSection> {
    const workSectionExists = await this.workSectionRepository.findByName(name);
    if (workSectionExists) {
      throw new AppError('There is already a work section with this name !!!');
    }

    const workSection = this.workSectionRepository.create({
      name,
      description,
    });
    return workSection;
  }
}
