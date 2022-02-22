import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateAddressUseCase } from "./UpdateAddressUseCase";

class UpdateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      place,
      number,
      complement,
      district,
      city,
      state,
      zipcode,
      client_id,
    } = request.body;

    const updateAddressUseCase = container.resolve(UpdateAddressUseCase);

    const parsedId = parseInt(id, 10);

    await updateAddressUseCase.execute({
      id: parsedId,
      place,
      number,
      complement,
      district,
      city,
      state,
      zipcode,
      client_id,
    });

    return response.status(204).send();
  }
}

export { UpdateAddressController };
