import { ApplicationError } from "src/shared/errors/ApplicationError";
import { inject, injectable } from "tsyringe";

import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { IAddressRepository } from "../../repositories/address/IAddressRepository";

@injectable()
class CreateAddressUseCase {
  private repository: IAddressRepository;

  constructor(
    @inject("AddressRepository")
    repository: IAddressRepository
  ) {
    Object.assign(this, { repository });
  }

  async execute({
    place,
    number,
    complement,
    district,
    city,
    state,
    zipcode,
    client_id,
  }: ICreateAddressDTO): Promise<void> {
    const clientAlreadyHaveAnAddress = await this.repository.findByClient(
      client_id
    );

    if (clientAlreadyHaveAnAddress)
      throw new ApplicationError(
        "This client already have an address registered",
        409
      );

    this.repository.create({
      place,
      number,
      complement,
      district,
      city,
      state,
      zipcode,
      client_id,
    });
  }
}

export { CreateAddressUseCase };
