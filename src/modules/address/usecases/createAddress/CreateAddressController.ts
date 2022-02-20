import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAddressUseCase } from "./CreateAddressUseCase";

class CreateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
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

    const createAddressUseCase = container.resolve(CreateAddressUseCase);

    await createAddressUseCase.execute({
      place,
      number,
      complement,
      district,
      city,
      state,
      zipcode,
      client_id,
    });

    return response.status(201).send();
  }
}

export { CreateAddressController };
