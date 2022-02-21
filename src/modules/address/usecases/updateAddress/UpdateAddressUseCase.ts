import { IClientRepository } from "src/modules/client/repositories/clients/IClientRepository";
import { ApplicationError } from "src/shared/errors/ApplicationError";
import { inject, injectable } from "tsyringe";

import { IUpdateAddressDTO } from "../../dtos/IUpdateAddressDTO";
import { IAddressRepository } from "../../repositories/address/IAddressRepository";

@injectable()
class UpdateAddressUseCase {
  private repository: IAddressRepository;
  private clientRepository: IClientRepository;

  constructor(
    @inject("AddressRepository")
    repository: IAddressRepository,
    @inject("ClientRepository")
    clientRepository: IClientRepository
  ) {
    Object.assign(this, { repository, clientRepository });
  }

  async execute({
    id,
    place,
    number,
    complement,
    district,
    city,
    state,
    zipcode,
    client_id,
  }: IUpdateAddressDTO): Promise<void> {
    const address = await this.repository.findById(id);

    if (!address) throw new ApplicationError("Address not found", 404);

    const client = client_id
      ? await this.clientRepository.findById(client_id)
      : address.client_id;
  }
}

export { UpdateAddressUseCase };
