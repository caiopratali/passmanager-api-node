import { Request, Response } from "express";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { id } = request.params;

      this.deleteUserUseCase.execute({ id });

      return response.send();
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { DeleteUserController };
