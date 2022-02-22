import { Router } from "express";
import { CreateAddressController } from "src/modules/address/usecases/createAddress/CreateAddressController";
import { UpdateAddressController } from "src/modules/address/usecases/updateAddress/UpdateAddressController";

const addressRouter = Router();
const create = new CreateAddressController();
const update = new UpdateAddressController();

addressRouter.post("/", create.handle);

addressRouter.put("/:id", update.handle);

export { addressRouter };
