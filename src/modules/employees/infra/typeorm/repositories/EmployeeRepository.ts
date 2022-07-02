import { ICreateEmployee } from '@modules/employees/domain/models/ICreateEmployee';
import { IEmployeeRepository } from '@modules/employees/domain/repositories/IEmployeeRepository';
import { WorkSessions } from '@modules/workSessions/infra/typeorm/entities/WorkSessions';
import { dataSource } from '@shared/infra/typeorm/connection';
import { Repository } from 'typeorm';
import { Employee } from '../entities/Employee';

export class EmployeeRepository implements IEmployeeRepository {
  constructor(private ormRepository: Repository<Employee>) {
    this.ormRepository = dataSource.getRepository(Employee);
  }

  public async create({ name, nickname, phone, session }: ICreateEmployee): Promise<Employee> {
    const employee = this.ormRepository.create({ name, nickname, phone, session });
    await this.ormRepository.save(employee);
    return employee;
  }

  public async save(employee: Employee): Promise<Employee> {
    await this.ormRepository.save(employee);
    return employee;
  }

  public async findAll(): Promise<Employee[]> {
    const employees = await this.ormRepository.find();
    return employees;
  }

  public async findByName(nickname: string): Promise<Employee | null> {
    const employee = await this.ormRepository.findOneBy({ nickname });
    return employee;
  }

  public async findById(id: string): Promise<Employee | null> {
    const employee = await this.ormRepository.findOneBy({ id });
    return employee;
  }

  public async findBySession(session: WorkSessions): Promise<Employee | null> {
    const employee = await this.ormRepository.findOneBy({ session });
    return employee;
  }

  public async remove(employee: Employee): Promise<void> {
    await this.ormRepository.remove(employee);
  }
}
