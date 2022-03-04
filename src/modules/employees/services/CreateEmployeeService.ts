import { WorkSessionsRepository } from '@modules/workSessions/repositories/WorkSessionsRepository';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Employee } from '../entities/Employee';
import { EmployeeRepository } from '../repositories/EmployeeRepository';

interface IEmployee {
  name: string;
  nickname: string;
  phone: string;
  session: string;
}

export class CreateEmployeeService {
  public async execute({ name, nickname, phone, session }: IEmployee): Promise<Employee> {
    const employeeRepository = getCustomRepository(EmployeeRepository);
    const sessionRepository = getCustomRepository(WorkSessionsRepository);

    const employeeExists = await employeeRepository.findByName(nickname);
    if (employeeExists) {
      throw new AppError('There is already any employee with this name !!!');
    }

    const sessionExists = await sessionRepository.findById(session);
    if (!sessionExists) {
      throw new AppError('Session not found !!!');
    }

    const employee = employeeRepository.create({
      name,
      nickname,
      phone,
      session: sessionExists,
    });

    await employeeRepository.save(employee);
    return employee;
  }
}
