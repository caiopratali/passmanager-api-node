import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  email: string;
  password: string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute({ email, password }: IRequest): void {
    const userAlreadyExists = this.userRepository.findByMail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    this.userRepository.create({ email, password });
  }
}

export { CreateUserUseCase };
