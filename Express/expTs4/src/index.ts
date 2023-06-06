import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";
import logger from "./middlewares/logger";
import router from "./router/router";

const PORT = process.env.PORT || 3333;
const app = express();

app.use(logger("completo"));
app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.end("Welcome to Web Academy!");
});

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
