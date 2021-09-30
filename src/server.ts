import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import "./database";
import "express-async-errors";
import { errorMidleware } from "./middlewares/errors";
import { router } from "./routes";
const app = express();

app.use(express.json());

app.use(router);

app.use(errorMidleware);

app.listen(3333, () => {
  console.log("Server is running");
});
