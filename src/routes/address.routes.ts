import { Router } from "express";
import { CreateAddressController } from "src/modules/address/usecases/createAddress/CreateAddressController";

const addressRouter = Router();
const create = new CreateAddressController();

addressRouter.post("/", create.handle);

export { addressRouter };
