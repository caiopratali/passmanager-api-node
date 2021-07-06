import { UserRepository } from "../../repositories/UserRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const userRepository = UserRepository.getInstance();

const updateUserUseCase = new UpdateUserUseCase(userRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserController };
