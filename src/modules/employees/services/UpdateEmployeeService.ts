import { IWorkSectionRepository } from '@modules/workSections/domain/repositories/IWorkSectionRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IEmployee } from '../domain/models/IEmployee';
import { IUpdateEmployee } from '../domain/models/IUpdateEmployee';
import { IEmployeeRepository } from '../domain/repositories/IEmployeeRepository';

@injectable()
export class UpdateEmployeeService {
  constructor(
    @inject('EmployeeRepository')
    private employeeRepository: IEmployeeRepository,

    @inject('WorkSectionRepository')
    private workSectionRepository: IWorkSectionRepository,
  ) {}

  public async execute({
    id,
    name,
    nickname,
    phone,
    work_section,
  }: IUpdateEmployee): Promise<IEmployee> {
    const employee = await this.employeeRepository.findById(id);
    if (!employee) {
      throw new AppError('Employee not found !!!');
    }

    const workSectionExists = await this.workSectionRepository.findById(work_section);
    if (!workSectionExists) {
      throw new AppError('Work Section not found !!!');
    }

    employee.name = name;
    employee.nickname = nickname;
    employee.phone = phone;

    await this.employeeRepository.save(employee);
    return employee;
  }
}
