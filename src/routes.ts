import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagsController } from "./controllers/CreateTagsController";

const router = Router();

const createUserController = new CreateUserController();

const createTagsController = new CreateTagsController();

router.post("/tags", createTagsController.handle);

router.post("/users", createUserController.handle);

export { router };
