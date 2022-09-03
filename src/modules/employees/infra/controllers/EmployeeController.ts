import { CreateEmployeeService } from '@modules/employees/services/CreateEmployeeService';
import { DeleteEmployeeService } from '@modules/employees/services/DeleteEmployeeService';
import { ListEmployeeService } from '@modules/employees/services/ListEmployeeService';
import { ShowEmployeeService } from '@modules/employees/services/ShowEmployeeService';
import { UpdateEmployeeService } from '@modules/employees/services/UpdateEmployeeService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class EmployeeController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, nickname, phone, work_section } = request.body;
    const createEmployee = container.resolve(CreateEmployeeService);

    const employee = await createEmployee.execute({
      name,
      nickname,
      phone,
      work_section,
    });

    return response.status(201).json(employee);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listEmployee = container.resolve(ListEmployeeService);
    const employee = await listEmployee.execute();
    return response.status(200).json(employee);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showEmployee = container.resolve(ShowEmployeeService);
    const employee = await showEmployee.execute({ id });
    return response.status(200).json(employee);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, nickname, phone, work_section } = request.body;

    const updateEmployee = container.resolve(UpdateEmployeeService);
    const employee = await updateEmployee.execute({
      id,
      name,
      nickname,
      phone,
      work_section,
    });
    return response.status(200).json(employee);
  }

  public async delete(request: Request, response: Response) {
    const { id } = request.params;
    const deleteEmployee = container.resolve(DeleteEmployeeService);
    await deleteEmployee.execute({ id });
    return response.status(200).json({ message: 'Successfully deleted employee 👍' });
  }
}
