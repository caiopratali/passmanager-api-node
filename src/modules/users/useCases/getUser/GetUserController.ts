import { Request, Response } from "express";

import { GetUserUseCase } from "./GetUserUseCase";

class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { id } = request.params;

      const user = this.getUserUseCase.execute({ id });

      return response.status(200).json({ user });
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { GetUserController };
