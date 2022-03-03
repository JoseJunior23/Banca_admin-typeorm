import { WorkSessionsRepository } from '@modules/workSessions/repositories/WorkSessionsRepository';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Employee } from '../entities/Employee';
import { EmployeesRepository } from '../repositories/EmployeesRepository';
interface IWorksession {
  name: string;
  description: string;
}
interface IEmployee {
  name: string;
  nickname: string;
  phone: string;
  work_session: IWorksession[];
}
export class CreateEmployeeService {
  public async execute({ name, nickname, phone, work_session }: IEmployee): Promise<Employee> {
    const employeeRepository = getCustomRepository(EmployeesRepository);
    const workSessionsRepository = getCustomRepository(WorkSessionsRepository);

    const employeeExists = await employeeRepository.findByName(nickname);
    if (employeeExists) {
      throw new AppError('There is already a employee with this nickname !!!');
    }

    const workSessionExists = await workSessionsRepository.findByIds(work_session);
    if (!workSessionExists) {
      throw new AppError('Could not find any employee with the given ids !!!');
    }

    const employee = employeeRepository.create({
      name,
      nickname,
      phone,
    });

    await employeeRepository.save(employee);
    return employee;
  }
}
