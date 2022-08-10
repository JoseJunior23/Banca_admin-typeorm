import { ICreateTeamEmployee } from '../models/ICreateTeamEmployees';
import { ITeamsEmployees } from '../models/ITeamEmployees';

export interface ITeamsEmployeeRepository {
  create(data: ICreateTeamEmployee): Promise<ITeamsEmployees>;
}
