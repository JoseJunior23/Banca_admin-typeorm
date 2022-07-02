import { IWorkSession } from '@modules/workSessions/domain/models/IworkSessions';

export interface IEmployee {
  id: string;
  name: string;
  nickname: string;
  phone: string;
  created_at: Date;
  updated_at: Date;
  session: IWorkSession;
}
