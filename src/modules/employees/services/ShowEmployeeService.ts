import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Employee } from '../entities/Employee';
import { EmployeeRepository } from '../repositories/EmployeeRepository';

interface IEmployee {
  id: string;
}
export class ShowEmployeeService {
  public async execute({ id }: IEmployee): Promise<Employee> {
    const employeeRepository = getCustomRepository(EmployeeRepository);

    const employee = await employeeRepository.findById(id);
    if (!employee) {
      throw new AppError('Employee not Found !!!');
    }

    return employee;
  }
}
