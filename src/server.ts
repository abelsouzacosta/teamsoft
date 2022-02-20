import "reflect-metadata";
import express from "express";
import "express-async-errors";

import "dotenv/config";

import "./database";
import "./shared/container";
import { router } from "./routes";
import errorHandler from "./shared/middlewares/ErrorHandler";

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
