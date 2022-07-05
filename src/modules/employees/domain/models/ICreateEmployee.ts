import { IWorkSession } from '@modules/workSessions/domain/models/IworkSessions';

export interface ICreateEmployee {
  name: string;
  nickname: string;
  phone: string;
  session: IWorkSession;
}
