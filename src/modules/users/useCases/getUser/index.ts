import { UserRepository } from "../../repositories/UserRepository";
import { GetUserController } from "./GetUserController";
import { GetUserUseCase } from "./GetUserUseCase";

const userRepository = UserRepository.getInstance();

const getUserUseCase = new GetUserUseCase(userRepository);

const getUserController = new GetUserController(getUserUseCase);

export { getUserController };
