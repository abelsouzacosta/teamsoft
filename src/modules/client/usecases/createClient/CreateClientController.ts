import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateClientUseCase } from "./CreateClientUseCase";

class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { cnpj, corporate_name, contact_name, phone } = request.body;

    const createClientUseCase = container.resolve(CreateClientUseCase);

    await createClientUseCase.execute({
      cnpj,
      corporate_name,
      contact_name,
      phone,
    });

    return response.status(201).send();
  }
}

export { CreateClientController };
