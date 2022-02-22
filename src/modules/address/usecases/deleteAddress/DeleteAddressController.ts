import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteAddressUseCase } from "./DeleteAddressUseCase";

class DeleteAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const parsedId = parseInt(id, 10);

    const deleteAddressUseCase = container.resolve(DeleteAddressUseCase);

    await deleteAddressUseCase.execute(parsedId);

    return response.status(200).send();
  }
}

export { DeleteAddressController };
