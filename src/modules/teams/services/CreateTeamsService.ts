import { IEmployeeRepository } from '@modules/employees/domain/repositories/IEmployeeRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateTeams } from '../domain/models/ICreateTeams';
import { ITeams } from '../domain/models/ITeams';
import { ITeamsRepository } from '../domain/repositories/ITeamsRepository';

@injectable()
export class CreateTeamsService {
  constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,

    @inject('EmployeeRepository')
    private employeeRepository: IEmployeeRepository,
  ) {}

  public async execute({ name, description, employees }: ICreateTeams): Promise<ITeams> {
    const teamExists = await this.teamsRepository.findByName(name);
    if (teamExists) {
      throw new AppError('There is a team registered with this name !!!');
    }

    const employeeExists = await this.employeeRepository.findAllByIds(employees);
    if (!employeeExists) {
      throw new AppError('There is a employee with this id !!!');
    }

    const teams = this.teamsRepository.create({
      name,
      description,
      employees,
    });
    return teams;
  }
}
