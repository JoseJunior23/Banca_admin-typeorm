import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IEmployee } from '../domain/models/IEmployee';
import { IEmployeeId } from '../domain/models/IEmployeeId';
import { IEmployeeRepository } from '../domain/repositories/IEmployeeRepository';

@injectable()
export class ShowEmployeeService {
  constructor(
    @inject('EmployeeRepository')
    private employeeRepository: IEmployeeRepository,
  ) {}

  public async execute({ id }: IEmployeeId): Promise<IEmployee> {
    const employee = await this.employeeRepository.findById(id);
    if (!employee) {
      throw new AppError('Employee not Found !!!');
    }

    return employee;
  }
}
