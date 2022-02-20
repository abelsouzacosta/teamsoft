import { ICreateAddressDTO } from "./ICreateAddressDTO";

interface IUpdateAddressDTO extends ICreateAddressDTO {
  id: number;
}

export { IUpdateAddressDTO };
