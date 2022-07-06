import { ICreateTeams } from '@modules/teams/domain/models/ICreateTeams';
import { ITeamsId } from '@modules/teams/domain/models/ITeamsId';
import { ITeamsRepository } from '@modules/teams/domain/repositories/ITeamsRepository';
import { dataSource } from '@shared/infra/typeorm/connection';
import { In, Repository } from 'typeorm';
import { Teams } from '../entities/Teams';

export class TeamsRepository implements ITeamsRepository {
  private ormRepository: Repository<Teams>;
  constructor() {
    this.ormRepository = dataSource.getRepository(Teams);
  }

  public async create({ name, description, employee }: ICreateTeams): Promise<Teams> {
    const team = this.ormRepository.create({ name, description, employee });
    await this.ormRepository.save(team);
    return team;
  }

  public async save(team: Teams): Promise<Teams> {
    await this.ormRepository.save(team);
    return team;
  }

  public async remove(team: Teams): Promise<void> {
    await this.ormRepository.remove(team);
  }

  public async findById(id: string): Promise<Teams | null> {
    const team = this.ormRepository.findOneBy({ id });
    return team;
  }

  public async findAll(): Promise<Teams[]> {
    const teams = this.ormRepository.find();
    return teams;
  }

  public async findByName(name: string): Promise<Teams | null> {
    const team = this.ormRepository.findOneBy({ name });
    return team;
  }

  public async findAllByIds(teams: ITeamsId[]): Promise<Teams[]> {
    const teamIds = teams.map(team => team.id);
    const existsTeams = await this.ormRepository.find({
      where: {
        id: In(teamIds),
      },
    });
    return existsTeams;
  }
}
