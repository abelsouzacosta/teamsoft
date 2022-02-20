import { Router } from "express";
import { CreateClientController } from "src/modules/client/usecases/createClient/CreateClientController";

const clientRouter = Router();
const create = new CreateClientController();

clientRouter.post("/", create.handle);

export { clientRouter };
