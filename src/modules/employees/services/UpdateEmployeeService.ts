import { IWorkSessionsRepository } from '@modules/workSessions/domain/repositories/IWorkSessionsRepository';
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

    @inject('WorkSessionsRepository')
    private workSessionsRepository: IWorkSessionsRepository,
  ) {}

  public async execute({
    id,
    name,
    nickname,
    phone,
    session,
  }: IUpdateEmployee): Promise<IEmployee> {
    const employee = await this.employeeRepository.findById(id);
    if (!employee) {
      throw new AppError('Employee not found !!!');
    }

    const sessionExists = await this.workSessionsRepository.findById(session.id);
    if (!sessionExists) {
      throw new AppError('Could not find any work session with the given id');
    }

    employee.name = name;
    employee.nickname = nickname;
    employee.phone = phone;
    employee.session = session;

    await this.employeeRepository.save(employee);
    return employee;
  }
}
