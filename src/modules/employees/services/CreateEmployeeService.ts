import { IWorkSectionRepository } from '@modules/workSections/domain/repositories/IWorkSectionRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IEmployee } from '../domain/models/IEmployee';
import { IRequestCreateEmployee } from '../domain/models/IRequestCreateEmployee';
import { IEmployeeRepository } from '../domain/repositories/IEmployeeRepository';

@injectable()
export class CreateEmployeeService {
  constructor(
    @inject('EmployeeRepository')
    private employeeRepository: IEmployeeRepository,

    @inject('WorkSectionRepository')
    private workSectionRepository: IWorkSectionRepository,
  ) {}

  public async execute({
    name,
    nickname,
    phone,
    section,
  }: IRequestCreateEmployee): Promise<IEmployee> {
    const employeeExists = await this.employeeRepository.findByName(nickname);
    if (employeeExists) {
      throw new AppError('There is already a employee with this name !!!');
    }

    const sectionExists = await this.workSectionRepository.findById(section);
    if (!sectionExists) {
      throw new AppError('Work session not found !!!');
    }

    const employee = await this.employeeRepository.create({
      name,
      nickname,
      phone,
      section: sectionExists,
    });
    return employee;
  }
}
