import { IWorkSession } from '@modules/workSessions/domain/models/IworkSessions';

export interface IUpdateEmployee {
  id: string;
  name: string;
  nickname: string;
  phone: string;
  session: IWorkSession;
}
