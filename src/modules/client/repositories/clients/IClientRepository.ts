import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { IDeleteClientDTO } from "../../dtos/IDeleteClientDTO";
import { IUpdateClientDTO } from "../../dtos/IUpdateClientDTO";
import { Client } from "../../entities/Client";

interface IClientRepository {
  findById(id: number): Promise<Client | undefined>;

  findByCNPJ(cnpj: string): Promise<Client | undefined>;

  list(): Promise<Client[]>;

  create({
    cnpj,
    corporate_name,
    contact_name,
    phone,
  }: ICreateClientDTO): Promise<void>;

  update({
    id,
    cnpj,
    corporate_name,
    contact_name,
    phone,
  }: IUpdateClientDTO): Promise<void>;

  delete({ id }: IDeleteClientDTO): Promise<void>;
}

export { IClientRepository };
