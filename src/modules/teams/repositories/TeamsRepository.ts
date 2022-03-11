import { EntityRepository, Repository } from 'typeorm';
import { Teams } from '../entities/Teams';

@EntityRepository(Teams)
export class TeamsRepository extends Repository<Teams> {
  public async findByName(name: string) {
    const team = this.findOne({
      where: {
        name,
      },
    });
    return team;
  }
}
