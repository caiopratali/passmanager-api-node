import { User } from "../model/User";
import { ICreateUserDTO, IUserRepository } from "./IUserRepository";

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

  findByMail(email: string): User {
    const user = this.users.find((user) => user.email === email);

    return user;
  }
}

export { UserRepository };
