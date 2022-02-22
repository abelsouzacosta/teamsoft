import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetDetailsClientUseCase } from "./GetDetailsClientUseCase";

class GetDetailsClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const parsedId = parseInt(id, 10);

    const getDetailsClientUseCase = container.resolve(GetDetailsClientUseCase);

    const clientDetails = await getDetailsClientUseCase.execute(parsedId);

    return response.status(200).json(clientDetails);
  }
}

export { GetDetailsClientController };
