import { Router } from "express";

import { createUserController } from "../useCases/createUser";
import { listUsersController } from "../useCases/listUsers";

const usersRoutes = Router();

usersRoutes.post("/", (req, res) => {
  return createUserController.handle(req, res);
});

usersRoutes.get("/", (req, res) => {
  return listUsersController.handle(req, res);
});

export { usersRoutes };
