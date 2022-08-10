import { IEmployeeRepository } from '@modules/employees/domain/repositories/IEmployeeRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IRequestCreateTeamEmployee } from '../domain/models/IRequestCreateTeamEmployees';
import { ITeamsEmployees } from '../domain/models/ITeamEmployees';
import { ITeamsEmployeeRepository } from '../domain/repositories/ITeamsEmployeeRepository';
import { ITeamsRepository } from '../domain/repositories/ITeamsRepository';

@injectable()
export class CreateTeamEmployeesService {
  constructor(
    @inject('TeamEmployeesRepository')
    private teamEmployeesRepository: ITeamsEmployeeRepository,

    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository,

    @inject('EmployeeRepository')
    private employeeRepository: IEmployeeRepository,
  ) {}
  // erro ao cadastra,
  public async execute({
    employees,
    team_id,
  }: IRequestCreateTeamEmployee): Promise<ITeamsEmployees> {
    const teamExists = await this.teamsRepository.findById(team_id);
    if (!teamExists) {
      throw new AppError('Could not find any team with the given id !!!');
    }

    const employeeExists = await this.employeeRepository.findAllByIds(employees);
    if (!employeeExists.length) {
      throw new AppError(' Could not find any employees with the given ids.!!!');
    }

    const existsEmployeesIds = employeeExists.map(employee => employee.id);

    const checkInexistentEmployees = employees.filter(
      employee => !existsEmployeesIds.includes(employee.id),
    );
    if (checkInexistentEmployees.length) {
      throw new AppError(` Could not find employee ${checkInexistentEmployees[0].id}`);
    }

    const teamEmployee = await this.teamEmployeesRepository.create({
      team: teamExists,
      employees: employeeExists,
    });

    return teamEmployee;
  }
}
