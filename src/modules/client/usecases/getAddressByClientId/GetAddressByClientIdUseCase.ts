import { Address } from "src/modules/address/entities/Address";
import { IAddressRepository } from "src/modules/address/repositories/address/IAddressRepository";
import { ApplicationError } from "src/shared/errors/ApplicationError";
import { inject, injectable } from "tsyringe";

import { IClientRepository } from "../../repositories/clients/IClientRepository";

@injectable()
class GetAddressByClientIdUseCase {
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

  async execute(client_id: number): Promise<Address | undefined> {
    const client = await this.clientRepository.findById(client_id);

    if (!client) throw new ApplicationError("Client not found", 404);

    const address = await this.repository.findByClientId(client_id);

    return address;
  }
}

export { GetAddressByClientIdUseCase };
