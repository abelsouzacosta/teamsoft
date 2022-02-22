import { IClientRepository } from "src/modules/client/repositories/clients/IClientRepository";
import { ApplicationError } from "src/shared/errors/ApplicationError";
import { inject, injectable } from "tsyringe";

import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { IAddressRepository } from "../../repositories/address/IAddressRepository";

@injectable()
class CreateAddressUseCase {
  private repository: IAddressRepository;
  private clientsRepository: IClientRepository;

  constructor(
    @inject("AddressRepository")
    repository: IAddressRepository,
    @inject("ClientRepository")
    clientsRepository: IClientRepository
  ) {
    Object.assign(this, { repository, clientsRepository });
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
    const clientExists = await this.clientsRepository.findById(client_id);

    if (!clientExists) throw new ApplicationError("Client not found", 404);

    const clientAlreadyHaveAnAddress = await this.repository.findByClientId(
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
