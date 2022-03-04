import { EntityRepository, Repository } from 'typeorm';
import { Employee } from '../entities/Employee';

@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {
  public async findByName(nickname: string): Promise<Employee | undefined> {
    const employee = await this.findOne({
      where: {
        nickname,
      },
    });
    return employee;
  }
}
