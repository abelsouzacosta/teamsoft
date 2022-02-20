import { ICreateClientDTO } from "./ICreateClientDTO";

interface IUpdateClientDTO extends ICreateClientDTO {
  id: number;
}

export { IUpdateClientDTO };
