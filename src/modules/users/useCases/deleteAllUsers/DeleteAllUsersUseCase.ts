import { IUserRepository } from "../../repositories/IUserRepository";

class DeleteAllUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute(): void {
    this.userRepository.deleteAllUsers();
  }
}

export { DeleteAllUsersUseCase };
