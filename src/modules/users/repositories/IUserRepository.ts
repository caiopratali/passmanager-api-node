import { User } from "../model/User";

interface ICreateUserDTO {
  email: string;
  password: string;
}

interface IUpdateUserDTO {
  id: string;
  email?: string;
  password?: string;
}

interface IUserRepository {
  getUser(id: string): User;
  list(): User[];
  create({ email, password }: ICreateUserDTO): void;
  update({ id, email, password }: IUpdateUserDTO): void;
  deleteUser(id: string): void;
  deleteAllUsers(): void;
}

export { IUserRepository, ICreateUserDTO, IUpdateUserDTO };
