import "reflect-metadata";
import express from "express";

import "dotenv/config";

import "./database";
import "./shared/container";

import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
