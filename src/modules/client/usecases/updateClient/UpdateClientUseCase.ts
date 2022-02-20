import { ApplicationError } from "src/shared/errors/ApplicationError";
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
    const clientExists = await this.repository.findById(id);
    const clientFoundByCNPJ = await this.repository.findByCNPJ(cnpj);

    if (!clientExists) throw new ApplicationError("Client not found", 404);

    if (clientFoundByCNPJ && clientFoundByCNPJ.id !== clientExists.id)
      throw new ApplicationError("CNPJ already taken", 409);

    this.repository.update({ id, cnpj, corporate_name, contact_name, phone });
  }
}

export { UpdateClientUseCase };
