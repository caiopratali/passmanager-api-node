import { Request, Response } from "express";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { id } = request.params;
      const { email, password } = request.body;

      this.updateUserUseCase.execute({ id, email, password });

      return response.send();
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { UpdateUserController };
