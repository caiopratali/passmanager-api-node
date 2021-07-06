import { UserRepository } from "../../repositories/UserRepository";
import { DeleteAllUsersController } from "./DeleteAllUsersController";
import { DeleteAllUsersUseCase } from "./DeleteAllUsersUseCase";

const userRepository = UserRepository.getInstance();

const deleteAllUsersUseCase = new DeleteAllUsersUseCase(userRepository);

const deleteAllUsersController = new DeleteAllUsersController(
  deleteAllUsersUseCase
);

export { deleteAllUsersController };
