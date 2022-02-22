import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAddressesUseCase } from "./ListAddressesUseCase";

class ListAddressesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAddressesUseCase = container.resolve(ListAddressesUseCase);

    const address = await listAddressesUseCase.execute();

    return response.status(200).json(address);
  }
}

export { ListAddressesController };
