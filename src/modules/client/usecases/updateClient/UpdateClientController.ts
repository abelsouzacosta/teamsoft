import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateClientUseCase } from "./UpdateClientUseCase";

class UpdateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { cnpj, corporate_name, contact_name, phone } = request.body;

    const parsedId = parseInt(id, 10);

    const updateClientUseCase = container.resolve(UpdateClientUseCase);

    await updateClientUseCase.execute({
      id: parsedId,
      cnpj,
      corporate_name,
      contact_name,
      phone,
    });

    return response.status(204).send();
  }
}

export { UpdateClientController };
