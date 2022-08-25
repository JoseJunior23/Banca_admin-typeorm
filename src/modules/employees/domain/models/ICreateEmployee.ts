import { IWorkSection } from '@modules/workSections/domain/models/IWorkSection';

export interface ICreateEmployee {
  name: string;
  nickname: string;
  phone: string;
  work_section: IWorkSection;
}
