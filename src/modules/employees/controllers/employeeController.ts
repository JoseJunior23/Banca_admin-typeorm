import { Request, Response } from 'express';
import { CreateEmployeeService } from '../services/CreateEmployeeService';

export class EmployeeController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, nickname, phone, work_session } = request.body;
    const createEmployee = new CreateEmployeeService();

    const employee = await createEmployee.execute({
      name,
      nickname,
      phone,
      work_session,
    });
    return response.json(employee);
  }
}
