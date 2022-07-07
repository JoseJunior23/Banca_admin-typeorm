import { ICreateTeamsDetail } from '../models/ICreateTeamsDetail';
import { ITeamsDetail } from '../models/ITeamsDetail';

export interface ITeamsDetailRepository {
  create(data: ICreateTeamsDetail): Promise<ITeamsDetail>;
  save(teamDetail: ITeamsDetail): Promise<ITeamsDetail>;
  remove(teamDetail: ITeamsDetail): Promise<void>;
  findAll(): Promise<ITeamsDetail[]>;
  findById(id: string): Promise<ITeamsDetail | null>;
}
