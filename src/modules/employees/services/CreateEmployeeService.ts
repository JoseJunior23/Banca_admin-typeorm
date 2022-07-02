import { IWorkSessionsRepository } from '@modules/workSessions/domain/repositories/IWorkSessionsRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateEmployee } from '../domain/models/ICreateEmployee';
import { IEmployeeRepository } from '../domain/repositories/IEmployeeRepository';
import { Employee } from '../infra/typeorm/entities/Employee';

@injectable()
export default class createEmployeeService {
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
  }: ICreateEmployee): Promise<Employee> {
    const sessionExists = await this.workSessionsRepository.findById(work_session_id);
    if (!sessionExists) {
      throw new AppError('Could not find any work session with the given id');
    }

    const employeeExists = await this.employeeRepository.findByName(nickname);
    if (employeeExists) {
      throw new AppError('Nickname already used !!!');
    }

    const employee = await this.employeeRepository.create({
      name,
      nickname,
      phone,
      session: sessionExists,
    });

    await this.employeeRepository.save(employee);
    return employee;
  }
}
