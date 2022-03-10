import { Request, Response } from 'express';
import CreateEmployeeService from '../services/CreateEmployeeService';
import { DeleteEmployeeService } from '../services/DeleteEmployeeService';
import { ListEmployeeService } from '../services/ListEmployeeService';
import { ShowEmployeeService } from '../services/ShowEmployeeService';
import { UpdateEmployeeService } from '../services/UpdateEmployeeService';

export class EmployeeController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, nickname, phone, session } = request.body;
    const createEmployee = new CreateEmployeeService();

    const employee = await createEmployee.execute({
      name,
      nickname,
      phone,
      session,
    });

    return response.json(employee);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listEmployee = new ListEmployeeService();
    const employee = await listEmployee.execute();
    return response.json(employee);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showEmployee = new ShowEmployeeService();
    const employee = await showEmployee.execute({ id });
    return response.json(employee);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, nickname, phone } = request.body;

    const updateEmployee = new UpdateEmployeeService();
    const employee = await updateEmployee.execute({
      id,
      name,
      nickname,
      phone,
    });
    return response.json(employee);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteEmployee = new DeleteEmployeeService();
    await deleteEmployee.execute({ id });
    return response.status(200).json({ message: 'Successfully deleted employee 👍' });
  }
}
