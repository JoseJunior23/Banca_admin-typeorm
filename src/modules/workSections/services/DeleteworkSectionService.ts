import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IWorkSectionId } from '../domain/models/IWorkSectionId';
import { IWorkSectionRepository } from '../domain/repositories/IWorkSectionRepository';

@injectable()
export class DeleteWorkSectionService {
  constructor(
    @inject('WorkSectionRepository')
    private workSectionRepository: IWorkSectionRepository,
  ) {}

  public async execute({ id }: IWorkSectionId): Promise<void> {
    const workSection = await this.workSectionRepository.findById(id);
    if (!workSection) {
      throw new AppError('Work session not found !!!');
    }

    await this.workSectionRepository.remove(workSection);
  }
}
