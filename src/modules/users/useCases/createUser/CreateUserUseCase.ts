import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  email: string;
  password: string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute({ email, password }: IRequest): void {
    this.userRepository.create({ email, password });
  }
}

export { CreateUserUseCase };
