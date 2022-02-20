import { IAddressRepository } from "src/modules/address/repositories/address/IAddressRepository";
import { AddressRepository } from "src/modules/address/repositories/implementations/AddressRepository";
import { IClientRepository } from "src/modules/client/repositories/clients/IClientRepository";
import { ClientRepository } from "src/modules/client/repositories/implementations/ClientRepository";
import { container } from "tsyringe";

container.registerSingleton<IClientRepository>(
  "ClientRepository",
  ClientRepository
);

container.registerSingleton<IAddressRepository>(
  "AddressRepository",
  AddressRepository
);
