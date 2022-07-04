import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateEmployee } from '../domain/models/ICreateEmployee';
import { IEmployee } from '../domain/models/IEmployee';
import { IEmployeeRepository } from '../domain/repositories/IEmployeeRepository';

@injectable()
export class CreateEmployeeService {
  constructor(
    @inject('EmployeeRepository')
    private employeeRepository: IEmployeeRepository,
  ) {}

  public async execute({ name, nickname, phone }: ICreateEmployee): Promise<IEmployee> {
    const employeeExists = await this.employeeRepository.findByName(nickname);
    if (employeeExists) {
      throw new AppError('There is already a employee with this name !!!');
    }

    const employee = await this.employeeRepository.create({
      name,
      nickname,
      phone,
    });
    return employee;
  }
}
