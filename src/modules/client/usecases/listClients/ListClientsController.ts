import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListClientsUseCase } from "./ListClientsUseCase";

class ListClientsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listClientsUseCase = container.resolve(ListClientsUseCase);

    const clients = await listClientsUseCase.execute();

    return response.status(200).json(clients);
  }
}

export { ListClientsController };
