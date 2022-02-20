import { Router } from "express";
import { CreateClientController } from "src/modules/client/usecases/createClient/CreateClientController";
import { DeleteClientController } from "src/modules/client/usecases/deleteClient/DeleteClientController";
import { ListClientsController } from "src/modules/client/usecases/listClients/ListClientsController";
import { UpdateClientController } from "src/modules/client/usecases/updateClient/UpdateClientController";

const clientRouter = Router();
const create = new CreateClientController();
const list = new ListClientsController();
const update = new UpdateClientController();
const remove = new DeleteClientController();

clientRouter.get("/", list.handle);

clientRouter.post("/", create.handle);

clientRouter.put("/:id", update.handle);

clientRouter.delete("/:id", remove.handle);

export { clientRouter };
