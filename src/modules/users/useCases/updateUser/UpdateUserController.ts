import { Request, Response } from "express";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const { email, password } = request.body;

    this.updateUserUseCase.execute({ id, email, password });

    return response.status(200).send();
  }
}

export { UpdateUserController };
