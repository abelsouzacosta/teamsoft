import { getRepository, Repository } from "typeorm";

import { ICreateClientDTO } from "../../dtos/ICreateClientDTO";
import { IDeleteClientDTO } from "../../dtos/IDeleteClientDTO";
import { IUpdateClientDTO } from "../../dtos/IUpdateClientDTO";
import { Client } from "../../entities/Client";
import { IClientRepository } from "../clients/IClientRepository";

class ClientRepository implements IClientRepository {
  private repository: Repository<Client>;

  constructor() {
    this.repository = getRepository(Client);
  }

  async list(): Promise<Client[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<Client | undefined> {
    const client = await this.repository.findOne({
      where: {
        id,
      },
    });

    return client;
  }

  async getDetails(id: number): Promise<Client | undefined> {
    const client = await this.repository.findOne({
      where: {
        id,
      },
      relations: ["address"],
    });

    return client;
  }

  async findByCNPJ(cnpj: string): Promise<Client | undefined> {
    const client = await this.repository.findOne({
      where: {
        cnpj,
      },
    });

    return client;
  }

  async findByCorporateName(
    corporate_name: string
  ): Promise<Client | undefined> {
    const client = await this.repository.findOne({
      where: {
        corporate_name,
      },
    });

    return client;
  }

  async create({
    cnpj,
    corporate_name,
    contact_name,
    phone,
  }: ICreateClientDTO): Promise<void> {
    const client = this.repository.create({
      cnpj,
      corporate_name,
      contact_name,
      phone,
    });

    await this.repository.save(client);
  }

  async update({
    id,
    cnpj,
    corporate_name,
    contact_name,
    phone,
  }: IUpdateClientDTO): Promise<void> {
    const client = await this.findById(id);

    if (client) {
      client.cnpj = cnpj || client.cnpj;
      client.corporate_name = corporate_name || client.corporate_name;
      client.contact_name = contact_name || client.contact_name;
      client.phone = phone || client.phone;
      await this.repository.save(client);
    }
  }

  async delete({ id }: IDeleteClientDTO): Promise<void> {
    const client = await this.findById(id);

    if (client) this.repository.remove(client);
  }
}

export { ClientRepository };
