import { getRepository, Repository } from "typeorm";

import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { IDeleteAddressDTO } from "../../dtos/IDeleteAddressDTO";
import { IUpdateAddressDTO } from "../../dtos/IUpdateAddressDTO";
import { Address } from "../../entities/Address";
import { IAddressRepository } from "../address/IAddressRepository";

class AddressRepository implements IAddressRepository {
  private repository: Repository<Address>;

  constructor() {
    this.repository = getRepository(Address);
  }

  async findById(id: number): Promise<Address | undefined> {
    const address = await this.repository.findOne({
      where: {
        id,
      },
    });

    return address;
  }

  async findByClientId(client_id: number): Promise<Address | undefined> {
    const address = await this.repository.findOne({
      where: {
        client_id,
      },
    });

    return address;
  }

  async list(): Promise<Address[]> {
    const addresses = await this.repository.find();

    return addresses;
  }

  async create({
    place,
    number,
    complement,
    district,
    city,
    state,
    zipcode,
    client_id,
  }: ICreateAddressDTO): Promise<void> {
    const address = this.repository.create({
      place,
      number,
      complement,
      district,
      city,
      state,
      zipcode,
      client_id,
    });

    await this.repository.save(address);
  }

  async update({
    id,
    place,
    number,
    complement,
    district,
    city,
    state,
    zipcode,
    client_id,
  }: IUpdateAddressDTO): Promise<void> {
    const address = await this.findById(id);

    if (address) {
      address.place = place || address.place;
      address.number = number || address.number;
      address.complement = complement || address.complement;
      address.district = district || address.district;
      address.city = city || address.city;
      address.state = state || address.state;
      address.zipcode = zipcode || address.zipcode;
      address.client_id = client_id || address.client_id;

      await this.repository.save(address);
    }
  }

  async delete({ id }: IDeleteAddressDTO): Promise<void> {
    const address = await this.findById(id);

    if (address) this.repository.remove(address);
  }
}

export { AddressRepository };
