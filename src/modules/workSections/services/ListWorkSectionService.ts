import { inject, injectable } from 'tsyringe';
import { IWorkSection } from '../domain/models/IWorkSection';
import { IWorkSectionRepository } from '../domain/repositories/IWorkSectionRepository';

@injectable()
export class ListWorkSectionService {
  constructor(
    @inject('WorkSectionRepository')
    private workSectionRepository: IWorkSectionRepository,
  ) {}

  public async execute(): Promise<IWorkSection[]> {
    const workSections = await this.workSectionRepository.findAll();
    return workSections;
  }
}
