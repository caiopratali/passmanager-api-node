import { Request, Response } from "express";

import { GetUserUseCase } from "./GetUserUseCase";

class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    const user = this.getUserUseCase.execute({ id });

    return response.status(200).json({ user });
  }
}

export { GetUserController };
