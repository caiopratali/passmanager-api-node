import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { email, password } = request.body;

      this.createUserUseCase.execute({ email, password });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { CreateUserController };
