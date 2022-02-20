import { ICreateAddressDTO } from "../../dtos/ICreateAddressDTO";
import { IDeleteAddressDTO } from "../../dtos/IDeleteAddressDTO";
import { IUpdateAddressDTO } from "../../dtos/IUpdateAddressDTO";
import { Address } from "../../entities/Address";

interface IAddressRepository {
  findById(id: number): Promise<Address | undefined>;

  findByClient(client_id: number): Promise<Address | undefined>;

  create({
    place,
    number,
    complement,
    district,
    city,
    state,
    zipcode,
  }: ICreateAddressDTO): Promise<void>;

  list(): Promise<Address>;

  update({
    id,
    place,
    number,
    complement,
    district,
    city,
    state,
    zipcode,
  }: IUpdateAddressDTO): Promise<void>;

  delete({ id }: IDeleteAddressDTO): Promise<void>;
}

export { IAddressRepository };
