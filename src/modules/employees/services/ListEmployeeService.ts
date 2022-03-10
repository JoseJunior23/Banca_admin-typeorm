import { getCustomRepository } from 'typeorm';
import { Employee } from '../entities/Employee';
import { EmployeeRepository } from '../repositories/EmployeeRepository';

export class ShowEmployeeService {
  public async execute(): Promise<Employee[]> {
    const employeeRepository = getCustomRepository(EmployeeRepository);
    const employee = await employeeRepository.find();
    return employee;
  }
}
