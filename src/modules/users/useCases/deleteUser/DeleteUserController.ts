import { Request, Response } from "express";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    this.deleteUserUseCase.execute({ id });

    return response.send();
  }
}

export { DeleteUserController };
