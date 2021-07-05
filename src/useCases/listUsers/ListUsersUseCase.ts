import { User } from "../../model/User";
import { IUserRepository } from "../../repositories/IUserRepository";

class ListUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute(): User[] {
    const users = this.userRepository.list();

    return users;
  }
}

export { ListUsersUseCase };
