import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetAddressByClientIdUseCase } from "./GetAddressByClientIdUseCase";

class GetAddressByClientIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const parsedId = parseInt(id, 10);

    const getAddressByClientIdUseCase = container.resolve(
      GetAddressByClientIdUseCase
    );

    const address = await getAddressByClientIdUseCase.execute(parsedId);

    return response.status(200).json(address);
  }
}

export { GetAddressByClientIdController };
