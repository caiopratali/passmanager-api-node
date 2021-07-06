import { IUserRepository } from "../../repositories/IUserRepository";

interface IDeleteUserProps {
  id: string;
}

class DeleteUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute({ id }: IDeleteUserProps): void {
    const user = this.userRepository.getUser(id);

    if (!user) {
      throw new Error("User not found");
    }

    this.userRepository.deleteUser(user.id);
  }
}

export { DeleteUserUseCase };
