import { Request, Response } from "express";

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listUsersUseCase.execute();

    return response.status(200).json(all);
  }
}

export { ListUsersController };
