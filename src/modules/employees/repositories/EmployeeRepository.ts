import { EntityRepository, Repository } from 'typeorm';
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
@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {
  public async findById(id: string): Promise<Employee | undefined> {
    const workSessions = await this.findOne(id, {
      relations: ['session'],
    });
    return workSessions;
  }

  public async findByName(nickname: string): Promise<Employee | undefined> {
    const employee = await this.findOne({
      where: {
        nickname,
      },
    });
    return employee;
  }

  public async createEmployee({ name, nickname, phone, session }: IEmployee): Promise<Employee> {
    const employee = this.create({
      name,
      nickname,
      phone,
      session: session,
    });

    await this.save(employee);
    return employee;
  }
}
