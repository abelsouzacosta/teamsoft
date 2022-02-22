import { ApplicationError } from "src/shared/errors/ApplicationError";
import { inject, injectable } from "tsyringe";

import { Client } from "../../entities/Client";
import { IClientRepository } from "../../repositories/clients/IClientRepository";

@injectable()
class GetDetailsClientUseCase {
  private repository: IClientRepository;

  constructor(
    @inject("ClientRepository")
    repository: IClientRepository
  ) {
    Object.assign(this, { repository });
  }

  async execute(client_id: number): Promise<Client | undefined> {
    const client = await this.repository.findById(client_id);

    if (!client) throw new ApplicationError("Client not found", 404);

    const clientDetails = await this.repository.getDetails(client_id);

    return clientDetails;
  }
}

export { GetDetailsClientUseCase };
