import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IEmployeeId } from '../domain/models/IEmployeeId';
import { IEmployeeRepository } from '../domain/repositories/IEmployeeRepository';

@injectable()
export class DeleteEmployeeService {
  constructor(@inject('EmployeeRepository') private employeeRepository: IEmployeeRepository) {}

  public async execute({ id }: IEmployeeId): Promise<void> {
    const employee = await this.employeeRepository.findById(id);
    if (!employee) {
      throw new AppError('Employee not found !!!');
    }

    await this.employeeRepository.remove(employee);
  }
}
