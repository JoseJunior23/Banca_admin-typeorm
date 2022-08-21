import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUpdateWorkSection } from '../domain/models/IUpdateWorkSection';
import { IWorkSection } from '../domain/models/IWorkSection';
import { IWorkSectionRepository } from '../domain/repositories/IWorkSectionRepository';

@injectable()
export class UpdateWorkSectionService {
  constructor(
    @inject('WorkSectionRepository')
    private workSectionRepository: IWorkSectionRepository,
  ) {}

  public async execute({ id, name, description }: IUpdateWorkSection): Promise<IWorkSection> {
    const workSection = await this.workSectionRepository.findById(id);
    if (!workSection) {
      throw new AppError('Work section not found !!!');
    }

    workSection.name = name;
    workSection.description = description;

    await this.workSectionRepository.save(workSection);

    return workSection;
  }
}
