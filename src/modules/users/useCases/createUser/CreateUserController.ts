import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { email, password } = request.body;

    this.createUserUseCase.execute({ email, password });

    return response.status(201).send();
  }
}

export { CreateUserController };
