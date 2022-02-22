import { ApplicationError } from "src/shared/errors/ApplicationError";
import { inject, injectable } from "tsyringe";

import { IAddressRepository } from "../../repositories/address/IAddressRepository";

@injectable()
class DeleteAddressUseCase {
  private repository: IAddressRepository;

  constructor(
    @inject("AddressRepository")
    repository: IAddressRepository
  ) {
    Object.assign(this, { repository });
  }

  async execute(id: number): Promise<void> {
    const address = await this.repository.findById(id);

    if (!address) throw new ApplicationError("Address not found", 404);

    this.repository.delete({ id });
  }
}

export { DeleteAddressUseCase };
