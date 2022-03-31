import { EntityRepository, In, Repository } from 'typeorm';
import { Teams } from '../entities/Teams';

interface IFindTeams {
  id: string;
}

@EntityRepository(Teams)
export class TeamsRepository extends Repository<Teams> {
  public async findByName(name: string): Promise<Teams | undefined> {
    const team = this.findOne({
      where: {
        name,
      },
    });
    return team;
  }

  public async findById(id: string): Promise<Teams | undefined> {
    const team = this.findOne({
      where: {
        id,
      },
    });
    return team;
  }

  public async findAllByIds(teams: IFindTeams[]): Promise<Teams[]> {
    const teamIds = teams.map(team => team.id);
    const existsTeams = await this.find({
      where: {
        id: In(teamIds),
      },
    });
    return existsTeams;
  }
}
