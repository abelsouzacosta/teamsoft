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
    this.repository.delete({ id });
  }
}

export { DeleteClientUseCase };
