import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagsController } from "./controllers/CreateTagsController";
import { AuthenticateUserController } from "./controllers/AuthenticatedUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController();

const createTagsController = new CreateTagsController();

const authenticateUserController = new AuthenticateUserController();

router.post("/tags", ensureAdmin, createTagsController.handle);

router.post("/users", createUserController.handle);

router.post("/authenticate", authenticateUserController.handle);

export { router };
