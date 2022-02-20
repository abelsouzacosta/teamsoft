import { Router } from "express";

import { clientRouter } from "./client.routes";

const router = Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    message: "Olá mundo",
  });
});

router.use("/clients", clientRouter);

export { router };
