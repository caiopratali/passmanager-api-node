import { Router } from "express";

import { createUserController } from "../modules/users/useCases/createUser";
import { deleteAllUsersController } from "../modules/users/useCases/deleteAllUsers";
import { deleteUserController } from "../modules/users/useCases/deleteUser";
import { getUserController } from "../modules/users/useCases/getUser";
import { listUsersController } from "../modules/users/useCases/listUsers";
import { updateUserController } from "../modules/users/useCases/updateUser";

const usersRoutes = Router();

usersRoutes.post("/", (req, res) => {
  return createUserController.handle(req, res);
});

usersRoutes.get("/", (req, res) => {
  return listUsersController.handle(req, res);
});

usersRoutes.get("/:id", (req, res) => {
  return getUserController.handle(req, res);
});

usersRoutes.put("/:id", (req, res) => {
  return updateUserController.handle(req, res);
});

usersRoutes.delete("/:id", (req, res) => {
  return deleteUserController.handle(req, res);
});

usersRoutes.delete("/", (req, res) => {
  return deleteAllUsersController.handle(req, res);
});

export { usersRoutes };
