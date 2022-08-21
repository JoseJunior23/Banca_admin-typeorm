import { IWorkSection } from '@modules/workSections/domain/models/IWorkSection';

export interface IEmployee {
  id: string;
  name: string;
  nickname: string;
  phone: string;
  work_section: IWorkSection;
  created_at: Date;
  updated_at: Date;
}
