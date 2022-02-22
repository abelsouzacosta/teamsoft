import { Router } from "express";
import { CreateAddressController } from "src/modules/address/usecases/createAddress/CreateAddressController";
import { DeleteAddressController } from "src/modules/address/usecases/deleteAddress/DeleteAddressController";
import { ListAddressesController } from "src/modules/address/usecases/listAddresses/ListAddressesController";
import { UpdateAddressController } from "src/modules/address/usecases/updateAddress/UpdateAddressController";

const addressRouter = Router();
const list = new ListAddressesController();
const create = new CreateAddressController();
const update = new UpdateAddressController();
const remove = new DeleteAddressController();

addressRouter.get("/", list.handle);

addressRouter.post("/", create.handle);

addressRouter.put("/:id", update.handle);

addressRouter.delete("/:id", remove.handle);

export { addressRouter };
