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

export default class createEmployeeService {
  public async execute({ name, nickname, phone, session }: IEmployee): Promise<Employee> {
    const employeeRepository = getCustomRepository(EmployeeRepository);
    const sessionRepository = getCustomRepository(WorkSessionsRepository);

    const sessionExists = await sessionRepository.findById(session);
    if (!sessionExists) {
      throw new AppError('Could not find any work session with the given id');
    }

    const employeeExists = await employeeRepository.findByName(nickname);
    if (employeeExists) {
      throw new AppError('Nickname already used !!!');
    }

    const employee = await employeeRepository.createEmployee({
      name,
      nickname,
      phone,
      session: sessionExists,
    });

    await employeeRepository.save(employee);
    return employee;
  }
}
