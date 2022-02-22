import { Router } from "express";
import { CreateAddressController } from "src/modules/address/usecases/createAddress/CreateAddressController";
import { ListAddressesController } from "src/modules/address/usecases/listAddresses/ListAddressesController";

const addressRouter = Router();
const create = new CreateAddressController();
const list = new ListAddressesController();

addressRouter.get("/", list.handle);

addressRouter.post("/", create.handle);

export { addressRouter };
