import "reflect-metadata";
import { errors } from "celebrate";
import express from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";
import "dotenv/config";

import "./database";
import "./shared/container";
import { router } from "./routes";
import errorHandler from "./shared/middlewares/ErrorHandler";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);
app.use(errors());
app.use(errorHandler);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
