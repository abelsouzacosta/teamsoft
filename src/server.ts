import "reflect-metadata";
import express from "express";

import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Olá mundo",
  });
});

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
