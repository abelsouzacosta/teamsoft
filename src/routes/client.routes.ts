import { Joi, celebrate, Segments } from "celebrate";
import { Router } from "express";
import { CreateClientController } from "src/modules/client/usecases/createClient/CreateClientController";
import { DeleteClientController } from "src/modules/client/usecases/deleteClient/DeleteClientController";
import { GetAddressByClientIdController } from "src/modules/client/usecases/getAddressByClientId/GetAddressByClientIdController";
import { GetDetailsClientController } from "src/modules/client/usecases/getDetailsClient/GetDetailsClientController";
import { ListClientsController } from "src/modules/client/usecases/listClients/ListClientsController";
import { UpdateClientController } from "src/modules/client/usecases/updateClient/UpdateClientController";

const clientRouter = Router();
const create = new CreateClientController();
const list = new ListClientsController();
const update = new UpdateClientController();
const remove = new DeleteClientController();
const findAddress = new GetAddressByClientIdController();
const getDetails = new GetDetailsClientController();

clientRouter.get("/", list.handle);

clientRouter.get(
  "/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().required(),
    }),
  }),
  getDetails.handle
);

clientRouter.get(
  "/address/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().required(),
    }),
  }),
  findAddress.handle
);

clientRouter.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      cnpj: Joi.string().required(),
      corporate_name: Joi.string().required(),
      contact_name: Joi.string().required(),
      phone: Joi.string().required(),
    },
  }),
  create.handle
);

clientRouter.put(
  "/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().required(),
    }),

    [Segments.BODY]: {
      cnpj: Joi.string(),
      corporate_name: Joi.string(),
      contact_name: Joi.string(),
      phone: Joi.string(),
    },
  }),
  update.handle
);

clientRouter.delete(
  "/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().required(),
    }),
  }),
  remove.handle
);

export { clientRouter };
