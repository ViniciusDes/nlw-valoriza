import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import "./database";
import "express-async-errors";
import { Middleware } from "./middlewares";
import { router } from "./routes";
const app = express();

app.use(express.json());

app.use(router);

app.use(Middleware);

app.listen(3333, () => {
  console.log("Server is running");
});
