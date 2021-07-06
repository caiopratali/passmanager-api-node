import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  email: string;
  password: string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute({ email, password }: IRequest): void {
    if (!email && !password) {
      throw new Error("Please fill in the fields!");
    } else if (!email) {
      throw new Error("Enter an email!");
    } else if (!password) {
      throw new Error("Enter a password!");
    }

    this.userRepository.create({ email, password });
  }
}

export { CreateUserUseCase };
