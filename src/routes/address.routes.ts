import { Joi, celebrate, Segments } from "celebrate";
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

addressRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      place: Joi.string().required(),
      number: Joi.number().integer().required(),
      complement: Joi.string(),
      district: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zipcode: Joi.string().required(),
      client_id: Joi.number().integer().required(),
    },
  }),
  create.handle
);

addressRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().required(),
    }),

    [Segments.BODY]: {
      place: Joi.string(),
      number: Joi.number().integer(),
      complement: Joi.string(),
      district: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      zipcode: Joi.string(),
      client_id: Joi.number().integer(),
    },
  }),
  update.handle
);

addressRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().required(),
    }),
  }),
  remove.handle
);

export { addressRouter };
