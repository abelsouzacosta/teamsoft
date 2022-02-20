import { inject, injectable } from "tsyringe";

import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { IClientRepository } from "../../repositories/clients/IClientRepository";

@injectable()
class CreateClientUseCase {
  private repository: IClientRepository;

  constructor(
    @inject("ClientRepository")
    repository: IClientRepository
  ) {
    this.repository = repository;
  }

  async execute({
    cnpj,
    corporate_name,
    contact_name,
    phone,
  }: ICreateClientDTO): Promise<void> {
    this.repository.create({ cnpj, corporate_name, contact_name, phone });
  }
}

export { CreateClientUseCase };
