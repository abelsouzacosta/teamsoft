import { Router } from "express";
import { CreateAddressController } from "src/modules/address/usecases/createAddress/CreateAddressController";
import { UpdateAddressController } from "src/modules/address/usecases/updateAddress/UpdateAddressController";
import { ListAddressesController } from "src/modules/address/usecases/listAddresses/ListAddressesController";

const addressRouter = Router();
const list = new ListAddressesController();
const create = new CreateAddressController();
const update = new UpdateAddressController();

addressRouter.get("/", list.handle);

addressRouter.post("/", create.handle);

addressRouter.put("/:id", update.handle);

export { addressRouter };
