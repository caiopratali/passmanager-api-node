import { User } from "../model/User";
import {
  ICreateUserDTO,
  IUpdateUserDTO,
  IUserRepository,
} from "./IUserRepository";

class UserRepository implements IUserRepository {
  private users: User[];

  private static INSTANCE: UserRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UserRepository {
    if (!UserRepository.INSTANCE) {
      UserRepository.INSTANCE = new UserRepository();
    }

    return UserRepository.INSTANCE;
  }

  create({ email, password }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      email,
      password,
      created_at: new Date(),
    });

    this.users.push(user);
  }

  list(): User[] {
    return this.users;
  }

  getUser(id: string): User {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  update({ id, email, password }: IUpdateUserDTO): void {
    const userIndex = this.users.findIndex((user) => user.id === id);

    const validMail = email || this.users[userIndex].email;
    const validPass = password || this.users[userIndex].password;

    const user = {
      id,
      email: validMail,
      password: validPass,
      created_at: this.users[userIndex].created_at,
      updated_at: new Date(),
    };

    this.users[userIndex] = user;
  }

  deleteUser(id: string): void {
    const userIndex = this.users.findIndex((user) => user.id === id);

    this.users.splice(userIndex, 1);
  }

  deleteAllUsers(): void {
    this.users = [];
  }
}

export { UserRepository };
