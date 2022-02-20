import { IClientRepository } from "src/modules/client/repositories/clients/IClientRepository";
import { ClientRepository } from "src/modules/client/repositories/implementations/ClientRepository";
import { container } from "tsyringe";

container.registerSingleton<IClientRepository>(
  "ClientRepository",
  ClientRepository
);
