// import { AppError } from '@shared/errors/AppError';
// import { getCustomRepository } from 'typeorm';
// import { EmployeeRepository } from '../repositories/EmployeeRepository';

// interface IEmployee {
//   id: string;
// }

// export class DeleteEmployeeService {
//   public async execute({ id }: IEmployee): Promise<void> {
//     const employeeRepository = getCustomRepository(EmployeeRepository);

//     const employee = await employeeRepository.findById(id);
//     if (!employee) {
//       throw new AppError('Employee not found !!!');
//     }

//     await employeeRepository.remove(employee);
//   }
// }
