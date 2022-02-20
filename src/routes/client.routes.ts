import { Router } from "express";
import { CreateClientController } from "src/modules/client/usecases/createClient/CreateClientController";
import { ListClientsController } from "src/modules/client/usecases/listClients/ListClientsController";

const clientRouter = Router();
const create = new CreateClientController();
const list = new ListClientsController();

clientRouter.get("/", list.handle);

clientRouter.post("/", create.handle);

export { clientRouter };
