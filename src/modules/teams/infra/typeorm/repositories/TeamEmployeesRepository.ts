import { ICreateTeamEmployee } from '@modules/teams/domain/models/ICreateTeamEmployees';
import { ITeamsEmployeeRepository } from '@modules/teams/domain/repositories/ITeamsEmployeeRepository';
import { dataSource } from '@shared/infra/typeorm/connection';
import { Repository } from 'typeorm';
import { TeamEmployees } from '../entities/TeamEmployees';

export class TeamEmployeesRepository implements ITeamsEmployeeRepository {
  private ormRepository: Repository<TeamEmployees>;
  constructor() {
    this.ormRepository = dataSource.getRepository(TeamEmployees);
  }

  public async create({ employees, team }: ICreateTeamEmployee): Promise<TeamEmployees> {
    const teamEmployee = this.ormRepository.create({
      team,
      team_employee: employees,
    });

    this.ormRepository.save(teamEmployee);
    return teamEmployee;
  }
}
