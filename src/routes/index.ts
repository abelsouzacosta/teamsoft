import { Router } from "express";

import { addressRouter } from "./address.routes";
import { clientRouter } from "./client.routes";

const router = Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    message: "Olá mundo",
  });
});

router.use("/clients", clientRouter);

router.use("/address", addressRouter);

export { router };
