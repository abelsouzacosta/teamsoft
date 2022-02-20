import { injectable, inject } from "tsyringe";

import { Client } from "../../entities/Client";
import { IClientRepository } from "../../repositories/clients/IClientRepository";

@injectable()
class ListClientsUseCase {
  private repository: IClientRepository;

  constructor(
    @inject("ClientRepository")
    repository: IClientRepository
  ) {
    this.repository = repository;
  }

  async execute(): Promise<Client[]> {
    const clients = await this.repository.list();

    return clients;
  }
}

export { ListClientsUseCase };
