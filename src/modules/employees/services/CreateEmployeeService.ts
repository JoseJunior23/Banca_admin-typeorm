import { IWorkSessionsRepository } from '@modules/workSessions/domain/repositories/IWorkSessionsRepository';
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

    @inject('WorkSessionsRepository')
    private workSessionsRepository: IWorkSessionsRepository,
  ) {}

  public async execute({
    name,
    nickname,
    phone,
    work_session_id,
  }: IRequestCreateEmployee): Promise<IEmployee> {
    const employeeExists = await this.employeeRepository.findByName(nickname);
    if (employeeExists) {
      throw new AppError('There is already a employee with this name !!!');
    }
    const sessionExists = await this.workSessionsRepository.findById(work_session_id);
    if (!sessionExists) {
      throw new AppError('Work session not found !!!');
    }

    const employee = await this.employeeRepository.create({
      name,
      nickname,
      phone,
      session: sessionExists,
    });
    return employee;
  }
}
