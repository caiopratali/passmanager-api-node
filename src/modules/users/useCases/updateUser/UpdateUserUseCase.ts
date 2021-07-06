import {
  IUpdateUserDTO,
  IUserRepository,
} from "../../repositories/IUserRepository";

class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute({ id, email, password }: IUpdateUserDTO): void {
    const userAlreadyExists = this.userRepository.getUser(id);

    if (!userAlreadyExists) {
      throw new Error("User not found!");
    }

    this.userRepository.update({ id, email, password });
  }
}

export { UpdateUserUseCase };
