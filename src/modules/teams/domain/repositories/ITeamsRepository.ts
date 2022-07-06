import { ICreateTeams } from '../models/ICreateTeams';
import { ITeams } from '../models/ITeams';
import { ITeamsId } from '../models/ITeamsId';

export interface ITeamsRepository {
  create(data: ICreateTeams): Promise<ITeams>;
  save(team: ITeams): Promise<ITeams>;
  remove(team: ITeams): Promise<void>;
  findAll(): Promise<ITeams[]>;
  findById(id: string): Promise<ITeams | null>;
  findByName(name: string): Promise<ITeams | null>;
  findAllByIds(teams: ITeamsId[]): Promise<ITeams[]>;
}
