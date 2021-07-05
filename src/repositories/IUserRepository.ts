import { User } from "../model/User";

interface ICreateUserDTO {
  email: string;
  password: string;
}

interface IUserRepository {
  findByMail(email: string): User;
  list(): User[];
  create({ email, password }: ICreateUserDTO): void;
}

export { IUserRepository, ICreateUserDTO };
