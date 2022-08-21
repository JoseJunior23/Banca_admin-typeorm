import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IWorkSection } from '../domain/models/IWorkSection';
import { IWorkSectionId } from '../domain/models/IWorkSectionId';
import { IWorkSectionRepository } from '../domain/repositories/IWorkSectionRepository';
@injectable()
export class ShowWorkSectionService {
  constructor(
    @inject('WorkSectionRepository')
    private workSectionRepository: IWorkSectionRepository,
  ) {}

  public async execute({ id }: IWorkSectionId): Promise<IWorkSection> {
    const workSection = await this.workSectionRepository.findById(id);
    if (!workSection) {
      throw new AppError('Work session not found !!!');
    }

    return workSection;
  }
}
