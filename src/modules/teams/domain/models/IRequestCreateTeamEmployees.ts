import { IEmployee } from '@modules/employees/domain/models/IEmployee';

export interface IRequestCreateTeamEmployee {
  team_id: string;
  employees: IEmployee[];
}
