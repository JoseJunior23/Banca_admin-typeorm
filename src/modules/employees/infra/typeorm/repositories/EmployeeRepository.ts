import { dataSource } from '@shared/infra/typeorm/connection';
import { Employee } from '../entities/Employee';

interface ISession {
  name: string;
  description: string;
}
interface IEmployee {
  name: string;
  nickname: string;
  phone: string;
  session: ISession;
}

const employeeRepository = dataSource.getRepository(Employee);
export class EmployeeRepository {
  public async findById(id: string): Promise<Employee | null> {
    const workSessions = await employeeRepository.findOneBy({ id });
    return workSessions;
  }

  public async findByName(nickname: string): Promise<Employee | null> {
    const employee = await employeeRepository.findOneBy({ nickname });
    return employee;
  }

  public async createEmployee({ name, nickname, phone, session }: IEmployee): Promise<Employee> {
    const employee = employeeRepository.create({
      name,
      nickname,
      phone,
      session: session,
    });

    await employeeRepository.save(employee);
    return employee;
  }
}
