import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Employee } from '../entities/Employee';
import { EmployeeRepository } from '../repositories/EmployeeRepository';

interface IEmployee {
  id: string;
  name: string;
  nickname: string;
  phone: string;
}
export class UpdateEmployeeService {
  public async execute({ id, name, nickname, phone }: IEmployee): Promise<Employee> {
    const employeeRepository = getCustomRepository(EmployeeRepository);

    const employee = await employeeRepository.findById(id);
    if (!employee) {
      throw new AppError('Employee not found !!!');
    }

    employee.name = name;
    employee.nickname = nickname;
    employee.phone = phone;

    await employeeRepository.save(employee);
    return employee;
  }
}
