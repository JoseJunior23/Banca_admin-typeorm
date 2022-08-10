import { CreateTeamEmployeesService } from '@modules/teams/services/CreateTeamEmployeeService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class TeamsEmployeeController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { team_id, employees } = request.body;
    const createTeamEmployee = container.resolve(CreateTeamEmployeesService);
    const teamEmployee = await createTeamEmployee.execute({
      team_id,
      employees,
    });
    return response.status(200).json(teamEmployee);
  }
}
