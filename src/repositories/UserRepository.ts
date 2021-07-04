import { User } from "../model/User";

interface ICreateUserDTO {
  email: string;
  password: string;
}

class UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
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
