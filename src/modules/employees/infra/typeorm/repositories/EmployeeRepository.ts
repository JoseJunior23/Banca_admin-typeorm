import { ICreateEmployee } from '@modules/employees/domain/models/ICreateEmployee';
import { IEmployeeId } from '@modules/employees/domain/models/IEmployeeId';
import { IEmployeeRepository } from '@modules/employees/domain/repositories/IEmployeeRepository';
import { dataSource } from '@shared/infra/typeorm/connection';
import { Repository, In } from 'typeorm';
import { Employee } from '../entities/Employee';

export class EmployeeRepository implements IEmployeeRepository {
  private ormRepository: Repository<Employee>;
  constructor() {
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

  public async remove(employee: Employee): Promise<void> {
    await this.ormRepository.remove(employee);
  }

  public async findById(id: string): Promise<Employee | null> {
    const employee = await this.ormRepository.findOne({
      where: { id },
      relations: ['team', 'session'],
    });
    return employee;
  }

  public async findByName(nickname: string): Promise<Employee | null> {
    const employee = await this.ormRepository.findOneBy({ nickname });
    return employee;
  }

  public async findAll(): Promise<Employee[]> {
    const employees = this.ormRepository.find();
    return employees;
  }

  public async findAllByIds(employees: IEmployeeId[]): Promise<Employee[]> {
    const employeeIds = employees.map(employee => employee.id);
    const existsEmployees = await this.ormRepository.find({
      where: {
        id: In(employeeIds),
      },
    });
    return existsEmployees;
  }
}
