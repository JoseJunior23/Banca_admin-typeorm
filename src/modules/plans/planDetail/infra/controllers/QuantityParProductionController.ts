import { Request, Response } from 'express';
import { QuantityParProductionDateService } from '../services/QuantityParProductionDateService';

export class QuantityParProductionController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { userEntryDate, userDepartureDate } = request.body;

    const indexQuantityProduction = new QuantityParProductionDateService();
    const quatityProduction = await indexQuantityProduction.execute({
      userEntryDate,
      userDepartureDate,
    });
  }
}
