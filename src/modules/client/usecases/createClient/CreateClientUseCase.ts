import { ApplicationError } from "src/shared/errors/ApplicationError";
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
    const cnpjAlreadyTaken = await this.repository.findByCNPJ(cnpj);
    const corporateNameAlreadyTaken = await this.repository.findByCorporateName(
      corporate_name
    );

    if (cnpjAlreadyTaken)
      throw new ApplicationError("This cnpj is already taken", 409);

    if (corporateNameAlreadyTaken)
      throw new ApplicationError("This corporate name is already taken", 409);

    this.repository.create({ cnpj, corporate_name, contact_name, phone });
  }
}

export { CreateClientUseCase };
