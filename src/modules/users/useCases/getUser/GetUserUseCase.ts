import { User } from "../../model/User";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IGetUserProps {
  id: string;
}

class GetUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute({ id }: IGetUserProps): User {
    const user = this.userRepository.getUser(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}

export { GetUserUseCase };
