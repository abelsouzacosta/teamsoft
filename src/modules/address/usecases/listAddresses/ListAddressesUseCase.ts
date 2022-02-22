import { inject, injectable } from "tsyringe";

import { Address } from "../../entities/Address";
import { IAddressRepository } from "../../repositories/address/IAddressRepository";

@injectable()
class ListAddressesUseCase {
  private repository: IAddressRepository;

  constructor(
    @inject("AddressRepository")
    repository: IAddressRepository
  ) {
    Object.assign(this, { repository });
  }

  async execute(): Promise<Address[]> {
    const addresses = await this.repository.list();

    return addresses;
  }
}

export { ListAddressesUseCase };
