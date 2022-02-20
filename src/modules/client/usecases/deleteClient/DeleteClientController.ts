import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteClientUseCase } from "./DeleteClientUseCase";

class DeleteClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const parsedId = parseInt(id, 10);

    const deleteClientUseCase = container.resolve(DeleteClientUseCase);

    await deleteClientUseCase.execute({ id: parsedId });

    return response.status(202).send();
  }
}

export { DeleteClientController };
