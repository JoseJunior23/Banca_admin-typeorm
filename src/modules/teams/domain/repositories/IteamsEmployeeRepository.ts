import { ICreateTeamsEmployee } from '../models/ICreateTeamsEmployee';
import { ITeamsEmployee } from '../models/ITeamsEmployee';

export interface ITeamsEmployeeRepository {
  create(data: ICreateTeamsEmployee): Promise<ITeamsEmployee>;
}
