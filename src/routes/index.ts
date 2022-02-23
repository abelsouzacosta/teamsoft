import { Router } from "express";

import { addressRouter } from "./address.routes";
import { clientRouter } from "./client.routes";

const router = Router();

router.use("/clients", clientRouter);

router.use("/address", addressRouter);

export { router };
