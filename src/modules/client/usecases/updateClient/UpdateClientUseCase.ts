import { inject, injectable } from "tsyringe";

import { IUpdateClientDTO } from "../../dtos/IUpdateClientDTO";
import { IClientRepository } from "../../repositories/clients/IClientRepository";

@injectable()
class UpdateClientUseCase {
  private repository: IClientRepository;

  constructor(
    @inject("ClientRepository")
    repository: IClientRepository
  ) {
    this.repository = repository;
  }

  async execute({
    id,
    cnpj,
    corporate_name,
    contact_name,
    phone,
  }: IUpdateClientDTO): Promise<void> {
    this.repository.update({ id, cnpj, corporate_name, contact_name, phone });
  }
}

export { UpdateClientUseCase };
