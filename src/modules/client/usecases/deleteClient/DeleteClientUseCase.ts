import { ApplicationError } from "src/shared/errors/ApplicationError";
import { inject, injectable } from "tsyringe";

import { IDeleteClientDTO } from "../../dtos/IDeleteClientDTO";
import { IClientRepository } from "../../repositories/clients/IClientRepository";

@injectable()
class DeleteClientUseCase {
  private repository: IClientRepository;

  constructor(
    @inject("ClientRepository")
    repository: IClientRepository
  ) {
    this.repository = repository;
  }

  async execute({ id }: IDeleteClientDTO): Promise<void> {
    const clientExists = await this.repository.findById(id);

    if (!clientExists) throw new ApplicationError("Client not found", 404);

    this.repository.delete({ id });
  }
}

export { DeleteClientUseCase };
